from django.shortcuts import render
from django.views import generic
from django import http
from typing import Any

class IndexView(generic.TemplateView):
    def get(self, request: http.HttpRequest, *args: Any, **kwargs: Any) -> http.HttpResponse:
        if not request.session or not request.session.session_key:
            request.session.save()
        print(request.session.session_key)
        
        return render(
            request, 
            "resume/index.html",
            {}
        )