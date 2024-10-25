import React, { useState } from "react";

const TelegramForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Telegramga xabar yuborish funksiyasi
  const sendToTelegram = async (message) => {
    const token = "8026942299:AAFowsuFy0VSuq869YCNh2HPKZz0BFND74I"; // Bot token
    const chatId = "5874190168"; // Sizning Chat ID
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      });
      if (response.ok) {
        alert("Telegramga yuborildi!");
      } else {
        alert("Yuborishda xatolik!");
      }
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  // Formani yuborish funksiyasi
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Ism: ${name}, E-mail: ${email}`;
    sendToTelegram(message);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border border-gray-300 rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Ismingiz</label>
        <input
          type="text"
          placeholder="Ismingiz"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Emailingiz</label>
        <input
          type="email"
          placeholder="Emailingiz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Telegramga yuborish
      </button>
    </form>
  );
};

export default TelegramForm;
