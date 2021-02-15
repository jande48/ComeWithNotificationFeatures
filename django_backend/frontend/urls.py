from django.urls import path, include
from . import views
from notification_features import views as notification_views
from django.contrib.auth import views as auth_views
from users import views as user_views

urlpatterns = [
    path('', views.index, name='index'),
    path('settings/', views.index, name='settings'),
    #path('notifications/', include('notification_features.urls')),
    path('about/', notification_views.about, name='about'),
    path('register/', user_views.register, name="register"),
    path('profile/', user_views.profile, name="profile"),
    path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name="login"),
    path('logout/', auth_views.LogoutView.as_view(template_name='users/logout.html'), name="logout"),
    path('getFriends/', views.getFriends, name='getFriends'),
]