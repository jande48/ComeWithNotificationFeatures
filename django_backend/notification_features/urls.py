from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='notifications-home'),
    path('about/', views.about, name='notifications-about'),
]