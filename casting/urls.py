from django.conf.urls import include, url
from django.views.generic import TemplateView

from rest_framework import routers

from .views import CastingUserViewSet


router = routers.DefaultRouter()
router.register(r'casting-users', CastingUserViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^vk-login',
        TemplateView.as_view(template_name="login.html"),
        name='login'),
]
