from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ChatRequestSerializer
from .services.ai_service import AIService
from rest_framework import status

# Create your views here.


class HealthCheckView(APIView):
    def get(self, request):
        return Response({"message": "Backend is running"})

class ChatAPIView(APIView):
    def post(self, request):
        serializer = ChatRequestSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                {
                    "errors": serializer.errors
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        user_message = serializer.validated_data["message"]

        try:
            ai_service = AIService()
            reply = ai_service.generate_support_reply(user_message)

            return Response(
                {
                    "reply": reply
                },
                status=status.HTTP_200_OK,
            )

        except Exception as error:
            return Response(
                {
                    "error": "Something went wrong while generating the AI response.",
                    "details": str(error),
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )