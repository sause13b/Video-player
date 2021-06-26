from . import views
from django.urls import path

urlpatterns = [
    path('', views.video, name='video'),
    path('/clear', views.clear, name='clear'),

]