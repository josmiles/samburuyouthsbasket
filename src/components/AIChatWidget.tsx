import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const SYSTEM_PROMPT = `You are a helpful assistant for Samburu Youths Basket, a youth-led, women-centered, climate-smart agricultural initiative in Samburu County, Northern Kenya.

Key facts about the project:
- Founded by Joseph Lesorogol and team of Samburu youth and women
- Location: Samburu County, Northern Kenya
- Activities: Permaculture farming, Agroforestry, Feedlot livestock, Women & Youth SACCO
- Impact: 1,200+ trees planted, Active Women's SACCO, Permaculture plots, 60% women participation
- Financial projections: Year 1: KES 450,000, Year 2: KES 1,150,000, Year 3: KES 2,500,000
- Funding ask: KES 3,000,000 for water infrastructure, farm expansion, solar fencing, training, SACCO capital
- Contact: josephlesorogol140@gmail.com, WhatsApp: +254716267141
- Partner: Zuhura Impact
- Website: samburuyouthsbasket.pages.dev

Answer questions about the project, how to donate, partner, or get involved. Be warm, professional, and inspiring. Keep answers concise and clear. If asked something you don't know, direct them to contact Joseph directly.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm AgriNova AI 🌿 — your smart assistant for Samburu Youths Basket. Ask me about our farming, how to donate, invest, or partner with us!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
            userMsg
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response. Please contact us directly at josephlesorogol140@gmail.com";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, something went wrong. Please contact us at josephlesorogol140@gmail.com or WhatsApp +254716267141" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Chat bubble button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Open AgriNova AI assistant"
        title="AgriNova AI"
      >
        {open ? <X size={24} /> : <Bot size={24} />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-background rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-border"
          style={{ height: "480px" }}>
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
            <Bot size={22} />
            <div>
              <p className="font-semibold text-sm">AgriNova AI</p>
              <p className="text-xs opacity-70">Powered by AI — Ask me anything</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot size={14} className="text-primary" />
                  </div>
                )}
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-sm"
                    : "bg-secondary text-foreground rounded-tl-sm"
                }`}>
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <User size={14} className="text-accent" />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex gap-2 justify-start">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot size={14} className="text-primary" />
                </div>
                <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-2.5">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{animationDelay:"0ms"}}></span>
                    <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{animationDelay:"150ms"}}></span>
                    <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{animationDelay:"300ms"}}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Ask a question..."
              className="flex-1 bg-secondary rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:bg-primary/90 transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
