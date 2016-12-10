from django.db import models

# Create your models here.

class Template(models.Model):
	name = models.CharField(max_length=200)
	content = models.TextField()
	is_published = models.NullBooleanField()
	price = models.FloatField(null = True)
	# pub_date = models.DateTimeField('date published')

	def __str__(self):
		return self.name
