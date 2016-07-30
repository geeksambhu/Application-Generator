from django.shortcuts import render
from django.http import HttpResponse
from  .models import Template
from .core import ContentHandler

from xhtml2pdf import pisa 

from django.template import Context
from django.template.loader import get_template
# Create your views here.

def homepage(request):
	context = {}
	return render(request, 'home.html', context)

def index(request):
	templates = Template.objects.all()[:5]
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

	template = get_template('templates/test.html')
	html  = template.render(Context({'template':template}))
	
	file = open('test.pdf', "w+b")
	pisaStatus = pisa.CreatePDF(html.encode('utf-8'), dest=file,
	        encoding='utf-8')

	file.seek(0)
	pdf = file.read()
	file.close()            
	return HttpResponse(pdf, 'application/pdf')