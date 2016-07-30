"""oaw URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.conf.urls import include
from templates import views

urlpatterns = [
	url(r'^$',views.homepage , name='homepage'),
	url(r'^templates$',views.index , name='templates.index'),
	url(r'^templates/(?P<template_id>[0-9]+)/$',views.show,name='templates.show'),
	url(r'^templates/(?P<template_id>[0-9]+)/edit$',views.edit,name='templates.edit'),
	url(r'^templates/(?P<template_id>[0-9]+)/generate$',views.generate,name='templates.generate'),
    url(r'^admin/', admin.site.urls),
    url(r'^ckeditor', include('ckeditor_uploader.urls')),

]