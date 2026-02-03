import { useState, useEffect } from "react";
import "./App.css";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import { Chatbot } from "supersimpledev";

function App() {
  const [chatMessages, setChatMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");

    if (!savedMessages || savedMessages === "undefined") {
      return [
        {
          message: "Hello! How can I help you today.",
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ];
    }

    return JSON.parse(savedMessages);
  });

  useEffect(() => {
    Chatbot.addResponses(
      {
        "good boy": "Thanks papa!",
        "give me a unique id": function () {
          return `Sure! Here it is ${crypto.randomUUID()}`;
        },
      },
      []
    );
  });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
