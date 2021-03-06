from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, re_path
from django.conf.urls import url
from todo import views


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/images/$', views.image_list),
    re_path(r'^api/images/([0-9])$', views.image_detail),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
