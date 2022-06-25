from .base import *

SECRET_KEY = 'django-insecure-e55tk-1(34s@pr6ckpxxb92-tmi8ks-d75nm^01-fc_d&$hxm+'
DEBUG = True
ALLOWED_HOSTS = []

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
