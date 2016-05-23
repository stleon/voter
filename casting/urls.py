from django.conf.urls import include, url
from django.views.generic import TemplateView

from rest_framework import routers

from casting.views import CastingUserViewSet, ChoiceUserViewSet, vk_login

router = routers.DefaultRouter()
router.register(r'casting-users', CastingUserViewSet,
                base_name='casting-users')
router.register('choices', ChoiceUserViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^vk-login',
        vk_login,
        name='vk_login'),
    url(r'^choice-photo',
        TemplateView.as_view(template_name="choice_photo.html"),
        name='choice-photo'),
    url(r'^votes',
        TemplateView.as_view(template_name="votes.html"),
        name='votes'),
    url(r'^top',
        TemplateView.as_view(template_name="top.html"),
        name='top'),
]
