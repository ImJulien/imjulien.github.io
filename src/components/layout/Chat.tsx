import React, { useState } from "react";

interface ChatProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Chat({ isOpen, onToggle }: ChatProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, user: "System", text: "Welcome to bozo.win chat!", time: "12:00" },
    { id: 2, user: "Player1", text: "Big win on slots!", time: "12:05" },
    { id: 3, user: "Admin", text: "Good luck everyone!", time: "12:10" },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        user: "You",
        text: message,
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <aside
      className={`fixed right-0 top-16 h-[calc(100vh-64px)] bg-[#1B2736] transition-all duration-300 ease-in-out z-40 ${
        isOpen ? "w-[250px]" : "w-0"
      } overflow-hidden`}
    >
      {isOpen && (
        <div className="flex flex-col h-full">
          {/* Chat Header */}
          <div className="p-4 bg-[#2A3B50] border-b border-[#233040]">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-bold text-lg">Chat</h3>
              <button
                onClick={onToggle}
                className="text-[#5C7CA9] hover:text-white transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M15 5L5 15M5 5L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-sm font-semibold ${
                      msg.user === "System"
                        ? "text-yellow-400"
                        : msg.user === "Admin"
                          ? "text-red-400"
                          : msg.user === "You"
                            ? "text-blue-400"
                            : "text-green-400"
                    }`}
                  >
                    {msg.user}
                  </span>
                  <span className="text-xs text-[#5C7CA9]">{msg.time}</span>
                </div>
                <div className="text-white text-sm bg-[#233040] rounded p-2">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="p-3 bg-[#2A3B50] border-t border-[#233040]">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 bg-[#1B2736] text-white text-sm rounded px-3 py-2 
                         border border-[#233040] focus:border-[#5C7CA9] focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#3469B4] text-white px-3 py-2 rounded hover:bg-[#2A5490] 
                         transition-colors flex items-center justify-center"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M2 8L14 2L8 8L14 14L2 8Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
