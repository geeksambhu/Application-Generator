from django.contrib import admin
from django.contrib.admin import AdminSite
# Register your models here.

from .models import Template
from django import forms
from ckeditor.widgets import CKEditorWidget


class MyAdminSite(AdminSite):
    # Text to put at the end of each page's <title>.
    site_title = 'My site admin'

    # Text to put in each page's <h1>.
    site_header = 'My administration'

    # Text to put at the top of the admin index page.
    index_title = 'Site administration'

admin_site = MyAdminSite()


class TemplateAdminForm(forms.ModelForm):
	# fields = ('name','content','price','is_published')
	content = forms.CharField(widget=CKEditorWidget())
	class Meta:
		model = Template
		fields = '__all__'

class TemplateAdmin(admin.ModelAdmin):
	form = TemplateAdminForm


admin.site.register(Template,TemplateAdmin)
