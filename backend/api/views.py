from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
# path('api/some-endpoint/', views.some_view, name='some_view'),
def some_view(request):
    return HttpResponse('Hello, World!')