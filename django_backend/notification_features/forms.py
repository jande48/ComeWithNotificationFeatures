from django import forms
from django.contrib.auth.models import User
from .models import Messages2

class SendMessage(forms.ModelForm):
    title = forms.CharField(max_length=30)
    content = forms.CharField(max_length=300)
    
    class Meta:
        model = Messages2
        fields = ['title', 'content']


