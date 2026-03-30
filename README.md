# SupportFlow AI

SupportFlow AI is a full-stack AI-powered customer support assistant built with **Next.js**, **shadcn/ui**, and **Django REST Framework**. It provides a modern chat interface where users can ask support-related questions and receive AI-generated responses through a Django backend integrated with OpenAI.

This project is designed as a portfolio-ready SaaS-style feature to demonstrate:

- modern frontend development with Next.js
- clean backend API design with Django REST Framework
- AI integration using OpenAI
- professional UI styling with shadcn/ui
- scalable project structure for real-world products

---

## Features

- Elegant dark-themed chat interface
- Built with Next.js App Router
- Styled using shadcn/ui
- Django REST Framework backend
- OpenAI-powered support responses
- Request validation using DRF serializers
- Clean separation of frontend and backend
- Reusable component structure
- Production-style service layer for AI logic

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Axios
- Redux

### Backend

- Python
- Django
- Django REST Framework
- django-cors-headers
- python-dotenv
- OpenAI SDK

---

## Project Structure

```bash
supportflow-ai/
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   │   └── chat/
│   │   ├── lib/
│   │   └── types/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── support/
│   │   ├── services/
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── urls.py
│   ├── manage.py
│   └── requirements.txt
│
└── README.md

```

How the Application Works

1. User opens the chat interface.

2. User types a support query.

3. Frontend sends request to Django API.

4. Django validates the request.

5. Django calls OpenAI via service layer.

6. OpenAI returns response.

7. Backend sends reply to frontend.

8. Frontend renders the AI response.
