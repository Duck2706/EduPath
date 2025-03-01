import { useState } from "react";
import {Button} from "@heroui/button";
import MoreLessChatHistory from "../public/assets/icons/more_less_chat_history";
import NewChat from "../public/assets/icons/new_chat";

const AIChat = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex min-h-screen">
      <div
        className={`${
          isCollapsed ? "w-32" : "w-64"
        } bg-[#b4cfdd] border-r border-gray-200 shadow-md fixed h-full transition-all duration-300`}
      >
        <div className="relative flex flex-col justify-between h-full">
          <Button
            isIconOnly
            variant="light"
            className={`absolute top-2 left-2 ${isCollapsed ? "opacity-100" : "opacity-100"} flex items-center justify-center`}
            aria-label="New Chat"
          >
            <NewChat />
          </Button>
          <Button
            isIconOnly
            variant="light"
            className={`absolute top-2 right-2 ${isCollapsed ? "opacity-100" : "opacity-100"} flex items-center justify-center`}
            onClick={toggleSidebar}
            aria-label="More/Less Chat History"
          >
            <MoreLessChatHistory />
          </Button>
        </div>
      </div>

{/* ------------------------------------------------------------------------------------------------------------------------------------------ */}

      <div className={`flex-1 bg-gray-50 transition-all duration-300 ${isCollapsed ? "ml-32" : "ml-64"} overflow-y-auto`}>
        <div className="p-4">
          <div className="mt-4 flex justify-center items-center">
            <div className="flex items-center space-x-2 fixed bottom-4 w-full max-w-[calc(100%-3rem)] justify-center">
              <input
                type="text"
                placeholder="Type something..."
                className="px-4 py-2 rounded-lg border border-gray-300 w-[calc(50%-2rem)]"
              />
              <Button className="px-4 py-2">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
