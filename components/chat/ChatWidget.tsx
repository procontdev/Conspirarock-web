"use client";

import { useEffect, useMemo, useState } from "react";

type ChatLink = {
  label: string;
  url: string;
};

type ChatResponse = {
  reply: string;
  links?: ChatLink[];
  suggestions?: string[];
};

type Message = {
  id: string;
  role: "bot" | "user";
  content: string;
  links?: ChatLink[];
};

const WEBHOOK_URL = process.env.NEXT_PUBLIC_CONSPIRABOT_WEBHOOK_URL || "";

const INITIAL_SUGGESTIONS = [
  "¿Qué temas toca el episodio con Salim Vera?",
  "¿Qué es Conspira-Files?",
  "¿Qué mitologías aparecen en el episodio 1?",
  "¿Cómo propongo un invitado?",
];

const WELCOME_MESSAGE =
  "Soy ConspiraBot. Puedo ayudarte a explorar episodios, invitados, temas y Conspira-Files dentro del universo ConspiraRock.";

function createId() {
  return Math.random().toString(36).slice(2);
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState(INITIAL_SUGGESTIONS);

  const sessionId = useMemo(() => {
    if (typeof window === "undefined") return "cr-session-server";
    const existing = window.localStorage.getItem("conspirabot-session");
    if (existing) return existing;
    const next = `cr-session-${createId()}`;
    window.localStorage.setItem("conspirabot-session", next);
    return next;
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    if (messages.length > 0) return;

    setMessages([
      {
        id: createId(),
        role: "bot",
        content: WELCOME_MESSAGE,
      },
    ]);
  }, [isOpen, messages.length]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = {
      id: createId(),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
          page: typeof window !== "undefined" ? window.location.pathname : "/",
          sessionId,
          referrer: "conspirabot-webchat",
        }),
      });

      const data: ChatResponse = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "bot",
          content:
            data.reply ||
            "La señal no devolvió una respuesta en este momento.",
          links: data.links || [],
        },
      ]);

      if (data.suggestions?.length) {
        setSuggestions(data.suggestions);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "bot",
          content:
            "La señal no responde en este momento. Intenta nuevamente en unos minutos.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-black/85 px-4 py-3 text-sm text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur"
        >
          <img
  src="/images/logo-conspirarock.jpg"
  alt="ConspiraRock"
  className="h-8 w-8 rounded-full object-cover"
/>
          <span className="uppercase tracking-[0.14em] text-[var(--cr-amber)]">
            Pregúntale a ConspiraBot
          </span>
        </button>
      ) : (
        <div className="fixed bottom-5 right-5 z-50 flex h-[620px] w-[390px] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(8,8,12,0.96)] shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
            <div className="flex items-center gap-3">
              <img
  src="/images/logo-conspirarock.jpg"
  alt="ConspiraRock"
  className="h-10 w-10 rounded-full object-cover"
/>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--cr-amber)]">
                  ConspiraBot
                </p>
                <p className="text-xs text-white/70">
                  Explora episodios, archivos y referencias
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70"
            >
              Cerrar
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div key={message.id}>
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-7 ${
                    message.role === "user"
                      ? "ml-auto bg-[var(--cr-red)] text-white"
                      : "bg-white/5 text-[var(--cr-text)]"
                  }`}
                >
                  {message.content}
                </div>

                {message.role === "bot" && message.links?.length ? (
                  <div className="mt-3 space-y-2">
                    {message.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        className="block text-sm text-[var(--cr-amber)] underline underline-offset-4"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            {isLoading ? (
              <div className="max-w-[88%] rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/70">
                ConspiraBot está consultando la señal...
              </div>
            ) : null}
          </div>

          <div className="border-t border-white/10 px-4 py-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.slice(0, 3).map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => sendMessage(suggestion)}
                  className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/75 transition-opacity hover:opacity-80"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    sendMessage(input);
                  }
                }}
                placeholder="Escribe tu pregunta..."
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
              />

              <button
                onClick={() => sendMessage(input)}
                disabled={isLoading}
                className="rounded-2xl bg-[var(--cr-red)] px-4 py-3 text-sm font-semibold text-white disabled:opacity-50"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}