from django.urls import path
from .views import HealthCheckView
from .views import ChatAPIView

urlpatterns = [
    path("health/", HealthCheckView.as_view(), name="health"),
    path("chat/", ChatAPIView.as_view(), name="chat"),
]