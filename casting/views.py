from rest_framework import viewsets

from .models import CastingUser
from .serializers import CastingUserSerializer


class CastingUserViewSet(viewsets.ModelViewSet):
    """
    API endpoint, которая позволяет просматривать, добавлять или редактировать
    участников голосования.
    """
    queryset = CastingUser.objects.all()
    serializer_class = CastingUserSerializer
