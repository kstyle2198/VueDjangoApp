from django.views.generic import TemplateView
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.csrf import csrf_exempt


# @method_decorator(ensure_csrf_cookie, name='dispatch')
@csrf_exempt 
class HomeView(TemplateView):
    template_name = 'home.html'


