import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, User, Sparkles } from "lucide-react";
import OpenAI from "openai";

const SYSTEM_INSTRUCTION = `You are ASTRA Assist, the highly advanced AI assistant for the ASTRA AI & ML club at Walchand College of Engineering (WCE), Sangli.
Your responses MUST be extremely concise (1 to 2 sentences max). 
You exclusively answer questions about ASTRA, artificial intelligence, machine learning, the club's events, membership, projects, and the team. 
If someone asks you a question entirely unrelated to AI or the club, politely decline and steer them back to ASTRA or technology.
Never write long paragraphs or generate blocks of code unless specifically requested to demonstrate a tiny snippet of PyTorch/ML. Keep your tone intelligent, helpful, and slightly futuristic.`;

const INITIAL_MESSAGE = "Hello! I am ASTRA Assist. How can I assist you with AI, events, or joining our club?";

export default function AstraChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: INITIAL_MESSAGE }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const generateCerebrasResponse = async (userText) => {
    setIsTyping(true);

    // First, push user message to UI
    setMessages((prev) => [...prev, { role: "user", text: userText }]);

    try {
      const apiKey = import.meta.env.VITE_CEREBRAS_API_KEY;

      // Fallback if the user hasn't added their key
      if (!apiKey || apiKey === "YOUR_CEREBRAS_API_KEY_HERE") {
        setTimeout(() => {
          setMessages((prev) => [...prev, {
            role: "assistant",
            text: "My neural link is offline. Please replace 'YOUR_CEREBRAS_API_KEY_HERE' in your .env file with your actual Cerebras API Key to activate my AI core."
          }]);
          setIsTyping(false);
        }, 1200);
        return;
      }

      // Initialize OpenAI SDK pointed at Cerebras endpoint
      const client = new OpenAI({
        apiKey: apiKey,
        baseURL: "https://api.cerebras.ai/v1",
        dangerouslyAllowBrowser: true // Required for frontend usage
      });

      // Slice off the initial hardcoded greeting so we don't pass it as history blindly 
      // (Optional, but keeps the prompt context perfectly clean)
      const validHistoryMessages = messages.length > 1 ? messages.slice(1) : [];

      // Construct OpenAI compatible message array
      const chatHistory = [
        { role: "system", content: SYSTEM_INSTRUCTION },
        ...validHistoryMessages.map(m => ({
          role: m.role, // 'user' or 'assistant'
          content: m.text
        })),
        { role: "user", content: userText }
      ];

      // Call Cerebras Inference API
      const completion = await client.chat.completions.create({
        model: "llama3.1-8b", // You can switch this to llama3.1-70b if preferred
        messages: chatHistory,
        max_tokens: 250,
      });

      const responseText = completion.choices[0].message.content;

      setMessages((prev) => [...prev, { role: "assistant", text: responseText }]);
    } catch (error) {
      console.error("Cerebras API Error:", error);
      setMessages((prev) => [...prev, {
        role: "assistant",
        text: `Error details: ${error.message}`
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput("");
    generateCerebrasResponse(userMessage);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-[9000] w-14 h-14 rounded-full flex items-center justify-center text-white cursor-none"
            style={{
              background: "linear-gradient(135deg, #6366f1, #a78bfa)",
              boxShadow: "0 0 30px rgba(99,102,241,0.4), inset 0 2px 5px rgba(255,255,255,0.3)",
              animation: "floatPulse 3s infinite ease-in-out"
            }}
          >
            <Bot size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, originX: 0, originY: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 left-6 w-[350px] sm:w-[380px] h-[500px] z-[9001] flex flex-col
              bg-[#0a0f1c]/90 backdrop-blur-2xl border border-indigo-500/20 rounded-[2rem] overflow-hidden"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(99,102,241,0.15)" }}
          >
            {/* Header */}
            <div className="px-6 py-4 flex items-center justify-between border-b border-white/5 bg-white/5 cursor-none">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide" style={{ fontFamily: "Syne, sans-serif" }}>ASTRA Assist</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-green-400 font-semibold uppercase tracking-widest leading-none mt-0.5">Cerebras Powered</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors cursor-none"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>

                    {/* Avatar */}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1
                      ${msg.role === "user" ? "bg-indigo-500 text-white" : "bg-white/10 text-indigo-300 border border-indigo-500/30"}`}>
                      {msg.role === "user" ? <User size={12} /> : <Bot size={12} />}
                    </div>

                    {/* Bubble */}
                    <div className={`px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed
                      ${msg.role === "user"
                        ? "bg-indigo-500 text-white rounded-tr-none"
                        : "bg-white/5 text-gray-300 border border-white/5 rounded-tl-none whitespace-pre-wrap"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[85%] flex-row">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-white/10 text-indigo-300 border border-indigo-500/30">
                      <Bot size={12} />
                    </div>
                    <div className="px-4 py-3.5 rounded-2xl bg-white/5 border border-white/5 rounded-tl-none flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/5 bg-white/[0.02]">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask ASTRA Assist..."
                  className="cursor-none w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-5 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all font-medium"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 w-9 h-9 flex items-center justify-center rounded-full bg-indigo-500 text-white disabled:opacity-50 disabled:bg-white/10 transition-colors cursor-none"
                >
                  <Send size={14} className={input.trim() && !isTyping ? "translate-x-[-1px] translate-y-[1px]" : ""} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
