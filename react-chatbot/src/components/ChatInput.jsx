import { useState } from 'react';
import './ChatInput.css';
import { Chatbot } from "supersimpledev";
import LoadingSpinner from "../assets/loading-spinner.gif";

export function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState("");
    const [isLoading, setLoaing] = useState(false);

    function saveInputText(event) {
      setInputText(event.target.value);
    }

    async function sendMessage() {
      if (!isLoading && inputText != "") {
        const newMessages = [
          ...chatMessages,
          {
            message: inputText,
            sender: "user",
            id: crypto.randomUUID(),
          },
        ];

        setChatMessages(newMessages);

        setChatMessages([
          ...newMessages,
          {
            message: (
              <img src={LoadingSpinner} className="loading-spinner" />
            ),
            sender: "robot",
            id: crypto.randomUUID(),
          },
        ]);
        const requestText = inputText;
        setLoaing(true);
        setInputText("");

        const response = await Chatbot.getResponseAsync(requestText);

        setChatMessages([
          ...newMessages,
          {
            message: response,
            sender: "robot",
            id: crypto.randomUUID(),
          },
        ]);

        setLoaing(false);
      }
    }

    function clearMessage(){
        setChatMessages([]);
    }

    async function onKeyDown(event) {
      if (event.key === "Enter") {
        await sendMessage();
      } else if (event.key === "Escape") {
        setInputText("");
      }
    }

    return (
      <div className="chat-input-container">
        <input
          placeholder="Send a message to the chatbot."
          size="30"
          onChange={saveInputText}
          value={inputText}
          onKeyDown={onKeyDown}
          className="chat-input"
        />
        <button onClick={sendMessage} className="send-button">
          Send
        </button>
        <button onClick={clearMessage} className="clear-button">
          Clear
        </button>
      </div>
    );
  }