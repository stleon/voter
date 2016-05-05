from rest_framework import serializers

from .models import CastingUser


class CastingUserSerializer(serializers.ModelSerializer):
    """
    Сериализатор модели участника голосования.
    """
    class Meta:
        model = CastingUser
        fields = ('user', 'url', 'rating', 'counter')
