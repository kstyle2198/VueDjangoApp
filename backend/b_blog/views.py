# from django.views.generic import ListView, DetailView
# from b_blog.models import Post



# @method_decorator(ensure_csrf_cookie, name='dispatch')
# class PostLV(ListView):
#     model = Post
#     template_name = 'blog/post_list.html'


# @method_decorator(ensure_csrf_cookie, name='dispatch')
# class PostDV(DetailView):
#     model = Post
#     template_name = 'blog/post_detail.html'

from django.views.generic import TemplateView
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie

@method_decorator(ensure_csrf_cookie, name='dispatch')
class PostListTV(TemplateView):
    template_name = 'blog/post_list.html'


@method_decorator(ensure_csrf_cookie, name='dispatch')
class PostDetailTV(TemplateView):
    template_name = 'blog/post_detail.html'
