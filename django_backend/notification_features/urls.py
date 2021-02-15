from django.urls import path
from . import views
from frontend import views as frontend_views

urlpatterns = [
    path('frontend/', frontend_views.index, name='frontend-home'),
    path('about/', views.about, name='notifications-about'),
]