from django.contrib.auth.models import User
from rest_framework import serializers

from .models import CastingUser


class CastingUserSerializer(serializers.ModelSerializer):
    """
    Сериализатор модели участника голосования.
    """

    class Meta:
        model = CastingUser
        fields = ('id', 'url', 'rating', 'counter', 'stars', 'position')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', )


class TopSerializer(serializers.ModelSerializer):
    info = UserSerializer(source='user')

    class Meta:
        model = CastingUser
        fields = ('id', 'info', 'url', 'rating', 'counter', 'stars', )
