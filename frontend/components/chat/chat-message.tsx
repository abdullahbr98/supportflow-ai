import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import { ChatMessage } from "@/types/chat";

interface ChatMessageProps {
    message: ChatMessage;
}

export function ChatMessageItem({ message }: ChatMessageProps) {
    const isUser = message.role === "user";

    return (
        <div
            className={cn(
                "flex w-full items-start gap-3",
                isUser ? "justify-end" : "justify-start"
            )}
        >
            {!isUser && (
                <Avatar className="h-9 w-9 border">
                    <AvatarFallback>
                        <Bot className="h-4 w-4" />
                    </AvatarFallback>
                </Avatar>
            )}

            <div
                className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm",
                    isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                )}
            >
                <p className="whitespace-pre-wrap leading-6">{message.content}</p>
            </div>

            {isUser && (
                <Avatar className="h-9 w-9 border">
                    <AvatarFallback>
                        <User className="h-4 w-4" />
                    </AvatarFallback>
                </Avatar>
            )}
        </div>
    );
}