from django.contrib import admin

# Register your models here.

from .models import Template
from django import forms
from ckeditor.widgets import CKEditorWidget



class TemplateAdminForm(forms.ModelForm):
	# fields = ('name','content','price','is_published')
	content = forms.CharField(widget=CKEditorWidget())
	class Meta:
		model = Template
		fields = '__all__'

class TemplateAdmin(admin.ModelAdmin):
	form = TemplateAdminForm


admin.site.register(Template,TemplateAdmin)
