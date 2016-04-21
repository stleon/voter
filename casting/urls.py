from django.conf.urls import include, url
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^vk-login',
        TemplateView.as_view(template_name="login.html"),
        name='login'),
]