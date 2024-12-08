from django.shortcuts import render
from django.http import HttpResponse


def projects(request):
    return HttpResponse('Hello World')


def project(request, pk):
    return HttpResponse('Hello World again' + ' ' + str(pk))

