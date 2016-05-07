from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('casting.urls')),
    url('', include('social.apps.django_app.urls', namespace='social')),
    url(r'^api-auth/',
        include('rest_framework.urls', namespace='rest_framework')),
]
