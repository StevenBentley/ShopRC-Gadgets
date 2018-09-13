from django.shortcuts import render, redirect
from django.views import View
from . import models
from django.contrib.auth.models import User
from .forms import SignUpForm
from django.contrib.auth import login, authenticate

def contact(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            user.save()
            return redirect('/')
    else:
        form = SignUpForm()
    return render(request, 'contact.html', {'form':form})

def shop(request):
    return render(request, 'shop.html', {})

class IndexView(View):
    def get(self, request):
        return render(request, 'index.html', {})
