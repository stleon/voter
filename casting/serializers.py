from django.contrib.auth.models import User

from rest_framework import serializers

from casting.models import CastingUser


class CastingUserSerializer(serializers.ModelSerializer):
    """
    Сериализатор модели участника голосования.
    """

    class Meta:
        model = CastingUser
        fields = ('id', 'url', 'rating', 'counter', 'stars', 'position', 'user')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    """
    Сериализатор модели пользователя
    """

    class Meta:
        model = User
        fields = ('first_name',)


class TopSerializer(serializers.ModelSerializer):
    """
    Сериализатор модели участника на странице ТОП
    """
    info = UserSerializer(source='user')

    class Meta:
        model = CastingUser
        fields = ('id', 'info', 'url', 'rating', 'counter', 'stars',)
