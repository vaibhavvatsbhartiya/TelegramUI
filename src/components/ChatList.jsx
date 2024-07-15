import { useState, useEffect } from 'react';
import axios from 'axios';

const ChatList = ({ selectedChatId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/api/chats/${selectedChatId}/messages`); // Replace with actual API endpoint
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    if (selectedChatId) {
      fetchMessages();
    }
  }, [selectedChatId]);

  return (
    <div className="flex-1 p-4">
      <ul>
        {messages.map((message) => (
          <li key={message.id} className="mb-2">
            <strong>{message.sender}</strong>: {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
