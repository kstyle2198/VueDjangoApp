from django.views.generic import ListView, DetailView
from b_blog.models import Post

class PostLV(ListView):
    model = Post
    template_name = 'blog/post_list.html'

class PostDV(DetailView):
    model = Post
    template_name = 'blog/post_detail.html'


