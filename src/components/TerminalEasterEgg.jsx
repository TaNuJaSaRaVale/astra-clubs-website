import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X } from "lucide-react";

export default function TerminalEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: "system", text: "ASTRA SECURE TERMINAL [Version 1.0.4]" },
    { type: "system", text: "Authenticating..." },
    { type: "success", text: "ACCESS GRANTED. Welcome to the core." },
    { type: "info", text: "Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  
  // Key Sequence Listener for "sudo" or "/astra"
  useEffect(() => {
    let keyBuffer = "";
    const target1 = "sudo";
    const target2 = "/astra";

    const handleKeyDown = (e) => {
      if (isOpen) {
        if (e.key === "Escape") setIsOpen(false);
        return; // Don't listen for trigger if already open
      }

      keyBuffer += e.key;
      if (keyBuffer.length > 10) keyBuffer = keyBuffer.slice(-10);

      if (keyBuffer.includes(target1) || keyBuffer.includes(target2)) {
        setIsOpen(true);
        keyBuffer = "";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleCommand = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: "input", text: `root@astra:~# ${cmd}` }];

    switch (cmd) {
      case "help":
        newHistory.push({ type: "system", text: "Commands: help, about, clear, secret, recruit" });
        break;
      case "about":
        newHistory.push({ type: "info", text: "ASTRA: The Artificial Intelligence and Machine Learning Club of WCE." });
        break;
      case "clear":
        setHistory([{ type: "system", text: "Terminal cleared." }]);
        setInput("");
        return;
      case "secret":
        newHistory.push({ type: "success", text: "You found the hidden parameter. The universe operates on neural networks." });
        break;
      case "recruit":
        newHistory.push({ type: "success", text: "Bypassing standard protocols... You are officially cool. Please tell a board member you found this terminal." });
        break;
      default:
        newHistory.push({ type: "error", text: `Command not found: ${cmd}` });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed top-0 left-0 w-full z-[99999] p-4 pointer-events-none"
        >
          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-green-500/30 bg-black/90 backdrop-blur-xl shadow-[0_0_50px_rgba(34,197,94,0.15)] pointer-events-auto font-mono">
            {/* Terminal Header */}
            <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-green-500/20">
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <TerminalIcon size={14} />
                <span>astra_sys_root</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-red-400 transition-colors"
                aria-label="Close terminal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-4 h-[300px] overflow-y-auto custom-scrollbar flex flex-col gap-1 text-sm">
              {history.map((line, i) => (
                <div 
                  key={i} 
                  className={`
                    ${line.type === 'system' ? 'text-gray-400' : ''}
                    ${line.type === 'input' ? 'text-green-400' : ''}
                    ${line.type === 'info' ? 'text-blue-400' : ''}
                    ${line.type === 'success' ? 'text-green-300 font-bold' : ''}
                    ${line.type === 'error' ? 'text-red-400' : ''}
                  `}
                >
                  {line.text}
                </div>
              ))}
              
              {/* Input Line */}
              <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
                <span className="text-green-500">root@astra:~#</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-green-100 placeholder-gray-600"
                  spellCheck={false}
                  autoComplete="off"
                />
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
