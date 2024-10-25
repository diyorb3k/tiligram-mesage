import React, { useState, useEffect } from "react";

const TelegramChat = () => {
  const [messages, setMessages] = useState([]);

  // Telegramdan xabarlarni olish
  const fetchMessages = async () => {
    const token = "8026942299:AAFowsuFy0VSuq869YCNh2HPKZz0BFND74I"; // Bot tokenini qo'shing
    const url = `https://api.telegram.org/bot${token}/getUpdates`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.ok) {
        // Olingan xabarlarni yangilash
        const newMessages = data.result.map((update) => {
          if (update.message) {
            return {
              id: update.message.message_id,
              from: update.message.from.first_name,
              text: update.message.text,
            };
          }
          return null; // Agar xabar bo'lmasa, null qaytarish
        }).filter(message => message !== null); // Null bo'lmagan xabarlarni filtrlaymiz

        // Yangi xabarlarni oldingi xabarlar bilan birlashtirish
        setMessages(prevMessages => [
          ...prevMessages,
          ...newMessages.filter(
            (newMessage) => !prevMessages.some(prevMessage => prevMessage.id === newMessage.id)
          )
        ]);
      }
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  useEffect(() => {
    fetchMessages(); // Komponent yuklanganda xabarlarni olish
    const interval = setInterval(fetchMessages, 1000); // Har 5 sekundda yangilash

    return () => clearInterval(interval); // Komponent o'chirilganda intervalni to'xtatish
  }, []);

  return (
    <div>
      <h2>Telegram Xabarlar</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.from}:</strong> {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TelegramChat;
