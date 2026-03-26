"use client";

import { useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "@/types/chat";
import { ChatMessageItem } from "./chat-message";
import { Bot } from "lucide-react";

interface ChatWindowProps {
    messages: ChatMessage[];
    isLoading: boolean;
}

export function ChatWindow({ messages, isLoading }: ChatWindowProps) {
    const bottomRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    if (messages.length === 0) {
        return (
            <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed bg-muted/30 px-6 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-background shadow-sm">
                    <Bot className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold">SupportFlow AI</h2>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    Ask a support question like “Where is my order?” or “How can I reset
                    my password?”
                </p>
            </div>
        );
    }

    return (
        <ScrollArea className="h-[calc(100vh-240px)] rounded-2xl border bg-background p-4">
            <div className="space-y-4">
                {messages.map((message) => (
                    <ChatMessageItem key={message.id} message={message} />
                ))}

                {isLoading && (
                    <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border bg-background">
                            <Bot className="h-4 w-4" />
                        </div>
                        <div className="rounded-2xl bg-muted px-4 py-3 text-sm shadow-sm">
                            <div className="flex items-center gap-1">
                                <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/60 [animation-delay:-0.3s]" />
                                <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/60 [animation-delay:-0.15s]" />
                                <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/60" />
                            </div>
                        </div>
                    </div>
                )}

                <div ref={bottomRef} />
            </div>
        </ScrollArea>
    );
}