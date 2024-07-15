import React, { useState } from 'react';
import axios from 'axios';

const MessageInput = ({ selectedChatId }) => {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      await axios.post(`/api/chats/${selectedChatId}/messages`, { text: message }); // Replace with actual API endpoint
      setMessage('');
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="p-4 border-t border-gray-300">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button onClick={sendMessage} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
        Send
      </button>
    </div>
  );
};

export default MessageInput;
