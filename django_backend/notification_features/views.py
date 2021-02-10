from django.shortcuts import render
from django.http import HttpResponse
from .models import Messages

def home(request):
    context = {
        'posts': Messages.objects.all(),
        'title': 'Home'
    }
    return render(request, 'notification_features/home.html', context)

def about(request):
    return render(request, 'notification_features/about.html', {'title': 'About'})

