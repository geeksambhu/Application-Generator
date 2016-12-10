from django.shortcuts import render
from django.http import HttpResponse
from  .models import Template
from .core import ContentHandler

from weasyprint import HTML
# Create your views here.

def homepage(request):
	context = {}
	return render(request, 'home.html', context)

def index(request):
	templates = Template.objects.all()[:10]
	return render(request , 'templates/index.html',{'templates':templates})

def show(request,template_id):
	template = Template.objects.get(pk=template_id)
	return render(request , 'templates/show.html',{'template':template})

def edit(request,template_id):
	template = Template.objects.get(pk=template_id)
	contentHandler = ContentHandler();
	fields = contentHandler.getAllFields(template.content)
	return render(request , 'templates/edit.html',{'template':template , 'fields' : fields})

def generate(request,template_id):
	template = Template.objects.get(pk=template_id)
	myDict = request.POST.copy()
	del myDict['csrfmiddlewaretoken']
	contentHandler = ContentHandler();

	htmlstring = contentHandler.replace(template.content,myDict)

	html = HTML(string=htmlstring)
	main_doc = html.render()
	pdf = main_doc.write_pdf()
	return HttpResponse(pdf, content_type='application/pdf')