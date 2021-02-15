from django.shortcuts import render
from django.contrib.auth.models import User
from .models import Friends
import json
from django.http import HttpResponse

def index(request):
    return render(request, 'frontend/index.html')

def getFriends(request):
    if request.method == 'POST':
        req = request.body
        print(req)
        return HttpResponse("OK")
# def allUsers(request):

#     context = {
#         'users': User.objects.all(),
#         'title': 'Users'
#     }
#     return render(request, 'frontend/all_users.html', context)
