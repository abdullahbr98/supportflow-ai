"use client";

import { FormEvent, useState } from "react";
import { SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
    onSendMessage: (message: string) => Promise<void> | void;
    isLoading: boolean;
}

export function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
    const [message, setMessage] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const trimmedMessage = message.trim();
        if (!trimmedMessage || isLoading) return;

        await onSendMessage(trimmedMessage);
        setMessage("");
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <Input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Type your support question..."
                className="h-12 rounded-xl"
                disabled={isLoading}
            />
            <Button
                type="submit"
                size="lg"
                className="h-12 rounded-xl px-5"
                disabled={isLoading || !message.trim()}
            >
                <SendHorizonal className="h-4 w-4" />
            </Button>
        </form>
    );
}