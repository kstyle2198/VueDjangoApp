from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic.list import BaseListView
from django.views.generic.detail import BaseDetailView
from django.contrib.auth import login
from django.contrib.auth.views import LoginView

from b_blog.models import Post
from d_api.views_util import obj_to_post, prev_next_post
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie

# Create your views here.

@method_decorator(ensure_csrf_cookie, name='dispatch')
class ApiPostLV(BaseListView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        qs = context['object_list']
        postList = [obj_to_post(obj) for obj in qs]
        return JsonResponse(data=postList, safe=False, status=200)


class ApiPostDV(BaseDetailView):
    model = Post

    def render_to_response(self, context, **response_kwargs):
        obj = context['object']
        post = obj_to_post(obj)
        post['prev'], post['next'] = prev_next_post(obj)
        return JsonResponse(data=post, safe=True, status=200)

class ApiLoginView(LoginView):
    def form_valid(self, form):
        user = form.get_user()
        login(self.request, user)
        # userDict = vars(user)
        # del userDict['_state'], userDict['password']
        userDict = {
            'id': user.id,
            'username': user.username,
        }
        return JsonResponse(data=userDict, safe=True, status=200)

    def form_invalid(self, form):
        return JsonResponse(data=form.errors, safe=True, status=400)
