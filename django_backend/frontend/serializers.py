from rest_framework import serializers
from frontend.models import Notifications

class NotificationsSerializer(serializers.ModelSerializer):
    class Meta:
        model: Notifications
        fields: '__all__'