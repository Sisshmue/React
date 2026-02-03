import { useState, useRef, useEffect } from "react";
import './ChatMessage.css';
import robotImage from '../assets/robot.png';
import userImage from "../assets/user.png";
import dayjs from "dayjs";

function useAutoScroll(dependencies) {
    const chatMessagesRef = useRef(null);

    useEffect(() => {
      const containerElem = chatMessagesRef.current;
      if (containerElem) {
        containerElem.scrollTop = containerElem.scrollHeight;
      }
    }, dependencies);
    return chatMessagesRef;
  }

  function ChatMessage({ message, sender }) {
    const time = dayjs().valueOf();
    return (
      <div
        className={
          sender === "user" ? "chat-message-user" : "chat-message-robot"
        }
      >
        {sender === "robot" && (
          <img src={robotImage} className="chat-message-profile" />
        )}
        <div className="chat-message-text">
            <div>{message}</div>
            <div className="chat-time">{dayjs(time).format('h:mma')}</div>
        </div>
        {sender === "user" && (
          <img src={userImage} className="chat-message-profile" />
        )}
      </div>
    );
  }

  function ChatMessages({ chatMessages }) {

    const chatMessagesRef = useAutoScroll([chatMessages]);

    return (
      <div className="chat-messages-container" ref={chatMessagesRef}>
        {chatMessages.map((message) => {
          return (
            <ChatMessage
              message={message.message}
              sender={message.sender}
              key={message.id}
            />
          );
        })}
      </div>
    );
  }

  export default ChatMessages;