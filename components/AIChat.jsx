import { useState } from "react";
import axios from "axios";
import { Button } from "@heroui/button";
import MoreLessChatHistory from "../public/assets/icons/more_less_chat_history";
import NewChat from "../public/assets/icons/new_chat";

const AIChat = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [input, setInput] = useState("");             
  const [messages, setMessages] = useState([]);              
  const [loading, setLoading] = useState(false);        

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/chat", {
        message: input,
      });

      const aiMessage = { sender: "ai", text: res.data.response };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Đã xảy ra lỗi khi gọi API." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`${
          isCollapsed ? "w-16" : "w-64"
        } bg-[#b4cfdd] border-r border-gray-200 shadow-md fixed h-full transition-all duration-300`}
      >
        <div className="relative flex flex-col justify-between h-full">
          <Button
            isIconOnly
            variant="light"
            className="absolute top-2 left-2 flex items-center justify-center"
            aria-label="New Chat"
          >
            <NewChat />
          </Button>
          <Button
            isIconOnly
            variant="light"
            className="absolute top-2 right-2 flex items-center justify-center"
            onPress={toggleSidebar}
            aria-label="More/Less Chat History"
          >
            <MoreLessChatHistory />
          </Button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div
        className={`flex-1 bg-gray-50 transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-64"
        } overflow-y-auto`}
      >
        <div className="p-4">
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">
            Trợ lý tư vấn học tập AI
          </h2>

          <div className="bg-white p-4 rounded-lg shadow h-[65vh] overflow-y-auto space-y-2 mb-20">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-blue-100 self-end ml-auto text-right"
                    : "bg-green-100 self-start mr-auto text-left"
                }`}
              >
                <span className="block text-sm text-gray-700 font-medium">
                  {msg.sender === "user" ? "Bạn" : "AI"}
                </span>
                <span className="block text-base">{msg.text}</span>
              </div>
            ))}
            {loading && (
              <div className="text-sm italic text-gray-500">AI đang trả lời...</div>
            )}
          </div>

          {/* Input */}
          <div className="fixed bottom-4 w-full max-w-[calc(100%-3rem)] flex justify-center items-center">
            <div className="flex items-center space-x-2 w-[calc(50%-2rem)]">
              <input
                type="text"
                placeholder="Nhập câu hỏi..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                className="px-4 py-2 rounded-lg border border-gray-300 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Button
                onPress={handleSend}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
              >
                Gửi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
