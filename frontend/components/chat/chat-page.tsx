"use client";

import { useState } from "react";
import { BotMessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChatInput } from "./chat-input";
import { ChatWindow } from "./chat-window";
import { ChatMessage } from "@/types/chat";

function createMessage(role: "user" | "assistant", content: string): ChatMessage {
    return {
        id: crypto.randomUUID(),
        role,
        content,
        createdAt: new Date().toISOString(),
    };
}

const mockReplies = [
    "Your request has been received. In the next phase, this response will come from your Django API.",
    "I can help with order tracking, delivery issues, refunds, and account support.",
    "This is a mock AI reply for the UI phase. Backend integration comes next.",
    "More text will be added here to test the scroll area and the UI.",
];

export function ChatPage() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSendMessage(userMessage: string) {
        const newUserMessage = createMessage("user", userMessage);

        setMessages((prev) => [...prev, newUserMessage]);
        setIsLoading(true);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const randomReply =
                mockReplies[Math.floor(Math.random() * mockReplies.length)];

            const assistantMessage = createMessage("assistant", randomReply);

            setMessages((prev) => [...prev, assistantMessage]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-muted/30 px-4 py-8">
            <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
                <Card className="rounded-2xl border shadow-sm">
                    <CardHeader className="pb-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                                <BotMessageSquare className="h-5 w-5" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl">SupportFlow AI</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    AI customer support assistant built with Next.js and Django REST Framework
                                </p>
                            </div>
                        </div>
                    </CardHeader>

                    <Separator />

                    <CardContent className="space-y-4 pt-6">
                        <ChatWindow messages={messages} isLoading={isLoading} />
                        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}