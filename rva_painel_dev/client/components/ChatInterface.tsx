import { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "Olá! Bem-vindo ao RVA Hub Geral. Como posso ajudá-lo hoje? Faça uma pergunta ou compartilhe o que está em sua mente.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: `Recebi sua mensagem: "${input}". Como assistente virtual, estou aqui para ajudar com informações, análises e consultas. Como posso aprofundar nesse tema?`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3 animate-in fade-in slide-in-from-bottom-2",
              message.type === "user" && "justify-end"
            )}
          >
            {message.type === "assistant" && (
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-primary">RVA</span>
              </div>
            )}

            <div
              className={cn(
                "max-w-2xl rounded-lg px-4 py-3 word-wrap",
                message.type === "assistant"
                  ? "bg-card/50 border border-border/50 text-foreground"
                  : "bg-primary text-primary-foreground"
              )}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <span className="text-xs opacity-70 mt-2 block">
                {message.timestamp.toLocaleTimeString("pt-BR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>

            {message.type === "user" && (
              <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-bold text-secondary">Você</span>
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-sm font-bold text-primary">RVA</span>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-lg px-4 py-3 flex gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-primary" />
              <span className="text-sm text-muted-foreground">
                Digitando...
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-border/50 p-4 bg-card/30 backdrop-blur-sm">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua pergunta ou mensagem..."
            disabled={isLoading}
            className="flex-1 bg-card border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 disabled:opacity-50 transition-colors"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-primary text-primary-foreground rounded-lg px-4 py-3 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 font-medium"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">Enviar</span>
          </button>
        </form>

        {/* Helper Text */}
        <p className="text-xs text-muted-foreground mt-3 text-center">
          Suas mensagens são processadas em tempo real. Faça perguntas específicas para melhores respostas.
        </p>
      </div>
    </div>
  );
}
