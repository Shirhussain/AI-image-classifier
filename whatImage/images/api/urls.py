from django.urls import  path, include
from .views import ImageViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'images', ImageViewSet)

app_name = 'api-images'
urlpatterns = [
    path('', include(router.urls))
]