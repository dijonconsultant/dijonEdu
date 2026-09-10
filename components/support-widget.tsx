"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const whatsappUrl = "https://wa.me/923333007385";

type Message = { role: "user" | "assistant"; content: string };

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-none stroke-current" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2Z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 3 21l1-4a8 8 0 1 1 2 1Z" />
      <path strokeLinecap="round" d="M8 12h.01M12 12h.01M16 12h.01" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function SupportWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      // Read the plain text stream from toTextStreamResponse()
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      // Add a placeholder assistant message to stream into
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          // Plain text stream – just accumulate the decoded chunk directly
          assistantText += decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = {
              role: "assistant",
              content: assistantText,
            };
            return updated;
          });
        }
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again or use WhatsApp below.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isChatOpen && (
        <section
          className="w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          aria-label="Dijon Consultants support chat"
        >
          <div className="bg-navy px-5 py-4 text-white flex justify-between items-start">
            <div>
              <p className="font-semibold">Dijon AI Support</p>
              <p className="mt-1 text-sm text-slate-200">Ask anything about studying abroad</p>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="rounded-full p-1 text-slate-300 hover:bg-slate-800 hover:text-white transition"
              aria-label="Close support chat"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="flex flex-col h-80 p-4" style={{ maxHeight: "calc(100vh - 200px)" }}>
            <div className="flex-1 overflow-y-auto space-y-3">
              {messages.length === 0 && (
                <p className="text-sm text-slate-400 text-center mt-4">
                  👋 Hi! Ask me about visa requirements, universities, documents, and more.
                </p>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`rounded-lg px-3 py-2 text-sm max-w-[85%] ${
                      msg.role === "assistant"
                        ? "bg-slate-100 text-slate-800"
                        : "bg-navy text-white"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <ReactMarkdown
                        components={{
                          p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                          ul: ({ node, ...props }) => <ul className="mb-2 list-inside list-disc" {...props} />,
                          ol: ({ node, ...props }) => <ol className="mb-2 list-inside list-decimal" {...props} />,
                          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                          strong: ({ node, ...props }) => <strong className="font-semibold text-slate-900" {...props} />,
                          h1: ({ node, ...props }) => <h1 className="mb-2 mt-3 font-bold text-lg" {...props} />,
                          h2: ({ node, ...props }) => <h2 className="mb-2 mt-3 font-bold text-base" {...props} />,
                          h3: ({ node, ...props }) => <h3 className="mb-2 mt-3 font-semibold text-base" {...props} />,
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-lg px-3 py-2 text-sm bg-slate-100 text-slate-500">
                    <span className="animate-pulse">Typing…</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="mt-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                disabled={isLoading}
                className="flex-1 rounded border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-navy disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="rounded bg-navy px-4 py-2 text-white hover:bg-slate-800 disabled:opacity-50 transition"
              >
                Send
              </button>
            </form>
          </div>

          <div className="p-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1fb957]"
            >
              <WhatsAppIcon /> Chat on WhatsApp instead
            </a>
          </div>
        </section>
      )}

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
          aria-label={isChatOpen ? "Close support chat" : "Open support chat"}
          aria-expanded={isChatOpen}
        >
          <ChatIcon />
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1fb957] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
          aria-label="Chat with Dijon Consultants on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
}
