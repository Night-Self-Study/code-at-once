from django.conf.urls import url
from . import views
import django
urlpatterns = [
        url('', views.index, name='index'),
]
