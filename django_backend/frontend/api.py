from notifications_react.models import Notifications
from rest_framework import viewsets, permissions
from .serializers import NotificationsSerializer

class NotificationsViewSet(viewsets.ModelViewSet):
    queryset = Notifications.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = NotificationsSerializer