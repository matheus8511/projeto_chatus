from django.shortcuts import render
from .models import Message, Room

def home(request):
    rooms = Room.objects.all()
    return render(request, 'chat/home.html', {
        'rooms': rooms,
        
        })
