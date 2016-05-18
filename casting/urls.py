from django.conf.urls import include, url
from django.views.generic import TemplateView

from rest_framework import routers

from casting.views import CastingUserViewSet, ChoiceUserViewSet

router = routers.DefaultRouter()
router.register(r'casting-users', CastingUserViewSet,
                base_name='casting-users')
router.register('choices', ChoiceUserViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^vk-login',
        TemplateView.as_view(template_name="login.html"),
        name='login'),
]
