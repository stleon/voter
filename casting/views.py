import random

from django.conf import settings
from django.shortcuts import render

from rest_framework import viewsets, status
from rest_framework.decorators import list_route
from rest_framework.response import Response


from casting.models import CastingUser, Choice
from casting.serializers import CastingUserSerializer, TopSerializer


class CastingUserViewSet(viewsets.ModelViewSet):
    """
    API endpoint, которая позволяет просматривать, добавлять или редактировать
    участников голосования.
    """
    queryset = CastingUser.objects.all()
    serializer_class = CastingUserSerializer

    @list_route(methods=['GET'])
    def top(self, request):
        """
        Топ N пользователей, позиции - индексы в списке
        """
        top_users = CastingUser.objects.order_by(
            '-rating')[:settings.USERS_ON_TOP_PAGE]
        resp = TopSerializer(top_users, many=True)
        return Response(resp.data)


class ChoiceUserViewSet(viewsets.ViewSet):
    '''
    API endpoint for creating unique user voting combinations
    and saving result of votes.

    POR FAVOR!

    API ендпоит для создания уникальной комбинации пользователей
    для голосования и сохранения результатов выбора.
    '''
    queryset = Choice.objects.all()
    serializer_class = CastingUserSerializer

    def create(self, request):
        '''
        Create new choice and return uuids and photo url of users.

        POR FAVOR!

        Создаёт новый объект выбора и возвращает уникальные uuid
        и фотографии пользователейпользователей
        '''
        castinguser = request.user.castinguser
        user = request.user.social_auth

        if castinguser.sex > 0:
            users = random.sample(
                list(CastingUser.objects.exclude(sex=castinguser.sex).order_by(
                    'counter').exclude(id=castinguser.id)[:100]), 2)
        else:
            users = random.sample(
                list(CastingUser.objects.order_by('counter').exclude(
                    id=castinguser.id)[:100]), 2)
        choice = Choice()
        choice.save()
        for user in users:
            choice.users.add(user)
        choice.save()
        resp = {
            'id': choice.id,
            'users': [
                {uuid: user.url} for uuid, user in choice.get_uuids().items()]
        }
        return Response(resp)

    def update(self, request, pk=None):
        '''
        Обсчитывает выбор пользователя при голосовании и обновляет рейтинг.
        '''
        if pk is not None:
            try:
                choice = Choice.objects.get(pk=pk)
            except Choice.DoesNotExist:
                return Response('Wrong choice id or choice already accepted',
                                status=status.HTTP_400_BAD_REQUEST)
            votedfor = request.data

            # update votes
            uuids = choice.get_uuids()
            if votedfor not in uuids.keys():
                return(Response('Current choice doesn\'t have that uuid',
                                status=status.HTTP_400_BAD_REQUEST))
            for uuid, user in choice.get_uuids().items():
                if uuid == votedfor:
                    user.rating += 1
                else:
                    user.rating -= 1
                user.counter += 1
                user.save()
            choice.delete()
        return(Response('You vote was accepted'))


def choice_photo(request):
    vk_id = request.user.social_auth.get(provider='vk-oauth2').uid
    return render(request, 'choice_photo.html', {'vk_id': vk_id})
