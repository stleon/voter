from django.conf import settings
from django.db.models import FloatField, ExpressionWrapper, F, Count
from rest_framework import viewsets
from rest_framework.decorators import list_route
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from casting.models import CastingUser
from casting.serializers import CastingUserSerializer, TopSerializer


class CastingUserViewSet(viewsets.ModelViewSet):
    """
    API endpoint, которая позволяет просматривать, добавлять или редактировать
    участников голосования.
    """
    queryset = CastingUser.objects.all()
    serializer_class = CastingUserSerializer
    permission_classes = (IsAuthenticated, )

    @list_route(methods=['GET'])
    def top(self, request):
        # TODO integer division truncates the result
        # http://www.postgresql.org/docs/current/static/functions-math.html
        top_users = CastingUser.objects.order_by('-rating').annotate(
            stars=ExpressionWrapper(
                (F('rating') / F('counter') + 1) * 2.5,
                output_field=FloatField())
            )[:settings.USERS_ON_TOP_PAGE]
        resp = TopSerializer(top_users, many=True)
        return Response(resp.data)
