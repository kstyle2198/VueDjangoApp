from django.contrib import admin
from b_blog.models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'create_dt', 'update_dt')