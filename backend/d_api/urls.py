
from django.urls import path
from d_api import views

app_name = 'd_api'

urlpatterns = [
    path('post/list/', views.ApiPostLV.as_view(), name='post_list'),
    path('post/<int:pk>/', views.ApiPostDV.as_view(), name='post_detail'),
    path('login/', views.ApiLoginView.as_view(), name='login'),
    path('register/', views.ApiRegisterView.as_view(), name='register'),
    path('logout/', views.ApiLogoutView.as_view(), name='logout'),
    path('pwdchg/', views.ApiPwdchgView.as_view(), name='pwdchg'),
    path('me/', views.ApiMeView.as_view(), name='me'),
]
