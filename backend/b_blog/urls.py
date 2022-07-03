from django.urls import path
from b_blog import views

app_name = 'b_blog'
urlpatterns = [
    path('post/list/', views.PostListTV.as_view(), name='post_list'),
    path('post/<int:pk>/', views.PostDetailTV.as_view(), name='post_detail'),
]