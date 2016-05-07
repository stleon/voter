from django.contrib.auth.models import User
from rest_framework import serializers

from .models import CastingUser


class CastingUserSerializer(serializers.ModelSerializer):
    """
    Сериализатор модели участника голосования.
    """

    class Meta:
        model = CastingUser
        exclude = ('id', )


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', )


class TopSerializer(CastingUserSerializer):
    info = UserSerializer(source='user')
    stars = serializers.FloatField(label="Звезды")

    class Meta(CastingUserSerializer.Meta):
        pass
