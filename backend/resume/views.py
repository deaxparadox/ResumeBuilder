from django.shortcuts import render
from django.views import generic
from django import http
from typing import Any

class IndexView(generic.TemplateView):
    def get(self, request: http.HttpRequest, *args: Any, **kwargs: Any) -> http.HttpResponse:
        return render(
            request, 
            "resume/index.html",
            {}
        )