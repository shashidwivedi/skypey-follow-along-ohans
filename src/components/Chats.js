import React, { useEffect, useRef } from "react";
import "./Chats.css";

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;

  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

const Chats = ({ messages}) => {
  const chatsRef = useRef(null);

  useEffect(() => {
    const chatsEl = chatsRef.current;
    chatsEl.scrollTop = chatsEl.scrollHeight;
  });

  return (
    <div className="Chats" ref={chatsRef}>
      {messages.map(message => (
        <Chat message={message} key={message.number} />
      ))}
    </div>
  );
}

export default Chats;