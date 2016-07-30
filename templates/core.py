import re

class ContentHandler:

	def __init__(self):
		self.parser = re.compile(r'{{\w+}}')

	def getAllFields(self,string):
		return self.formatter(self.getWithBackets(string))

	def getWithBackets(self,string):
		return self.parser.findall(string)			

	def formatter(self,data):
		elements = []
		for d in data:
			elements.append(d[2:-2])
		return elements

	def replace(self,string,data):
		for d in data:
			s = '{{'+d+'}}'
			string = string.replace(s,data[d])
		return string;


# a = ContentHandler()

# print(a.getAllFields(r'my name is {{name}} and {{bhusal}}'))

		