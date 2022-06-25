from django.db import models
from django.urls import reverse
from taggit.managers import TaggableManager
# Create your models here.


class Post(models.Model):
    # verbose_name은 컬럼에 대한 별칭
    title = models.CharField(verbose_name='TITLE', max_length=50)
    description = models.CharField(
        'DESCRIPTION', max_length=100, blank=True, help_text='simple description text.')
    content = models.TextField('CONTENT')
    create_dt = models.DateTimeField('CREATE DATE', auto_now_add=True)
    update_dt = models.DateTimeField('UPEATE DATE', auto_now=True)
    tags = TaggableManager(blank=True)
    # owner = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='OWNER', blank=True, null=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('blog:post_detail', args=(self.id))

    def get_prev(self):
        return self.get_previous_by_update_dt()   # get이하는 장고 제공 함수

    def get_next(self):
        return self.get_next_by_update_dt()   # get이하는 장고 제공 함수
