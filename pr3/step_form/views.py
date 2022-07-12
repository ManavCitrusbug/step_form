from webbrowser import get
from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
import urllib.request, json
# Create your views here.

class Register1(View):
    def get(self,request):
        return render(request,'page1.html')

class Country(View):
    def get(self,request):
            url='http://127.0.0.1:8000/static/js/countries.json/'
            with urllib.request.urlopen(f"{url}") as url:
                data = json.loads(url.read().decode())
            return JsonResponse({"data":data})
class State(View):
    def get(self,request):
            url='http://127.0.0.1:8000/static/js/states.json/'
            with urllib.request.urlopen(f"{url}") as url:
                data = json.loads(url.read().decode())
            return JsonResponse({"data":data})
