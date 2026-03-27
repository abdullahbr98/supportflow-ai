from openai import OpenAI
from django.conf import settings


class AIService:
    def __init__(self):
        self.client = OpenAI(api_key=settings.OPENAI_API_KEY)

    def generate_support_reply(self, user_message: str) -> str:
        system_prompt = """
        You are a professional AI customer support assistant for a SaaS platform.
        Be concise, clear, and helpful.
        Answer in a friendly and professional tone.
        If the user asks something ambiguous, give a reasonable support-style answer.
        Do not invent technical system actions that you cannot verify.
        """

        response = self.client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {"role": "system", "content": system_prompt.strip()},
                {"role": "user", "content": user_message},
            ],
            temperature=0.4,
        )

        return response.choices[0].message.content.strip()