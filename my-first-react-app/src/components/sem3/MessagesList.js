import { useState } from "react";
function MessagesList() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Привет" },
    { id: 2, text: "Здравствуй" },
    { id: 3, text: "Бонжур" },
    { id: 4, text: "Хелло" },
  ]);

  return (
    <>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </>
  );
}

export default MessagesList;
