
from django.urls import path
from d_api import views

app_name = 'd_api'

urlpatterns = [
    path('post/list/', views.ApiPostLV.as_view(), name='post_list'),
    path('post/<int:pk>/', views.ApiPostDV.as_view(), name='post_detail'),
]