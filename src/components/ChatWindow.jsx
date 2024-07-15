import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import bgImage from '../assets/telegram-background-image-dark-theme.png';
import { CounterContext } from '../context/CounterSelectedChatId';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const { selectedChatId, setChatName } = useContext(CounterContext);

  useEffect(() => {
    if (selectedChatId) {
      const fetchMessages = async () => {
        try {
          const response = await axios.get(
            `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${selectedChatId}`
          );

          if (response.data && response.data.data) {
            console.log(response.data.data[0].message);
            setMessages(response.data.data);
          } else {
            console.error('API response is not as expected:', response.data);
          }
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      };

      fetchMessages();
    }
  }, [selectedChatId]);

  return (
    <>
      {selectedChatId == null ? (
        <div
          className="w-full bg-center bg-cover h-screen opacity-90"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            {/* Optional fixed background image content */}
          </div>
        </div>
      ) : (
        <div
          className="w-full bg-center bg-cover h-screen opacity-90"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="flex h-full text-white bg-opacity-50">
            <div className="flex flex-col w-full">
              <div className="flex items-center p-4 bg-darklightFilledColor text-white cursor-pointer">
                <img
                  src="https://th.bing.com/th/id/OIP.YhuQ6IzRB9ZbOi8aOCW0kgAAAA?w=284&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="Profile Image"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4 flex-1">
                  <p className="text-lg font-semibold"> Shone Jogi </p>
                  <p className="text-sm text-gray-400">
                  Welcome to BeyondChats...
                  </p>
                </div>
                <div className="ml-auto flex items-center">
                  <span className="text-gray-400">08:00</span>
                  <span className="ml-4 bg-purple-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    91
                  </span>
                </div>
              </div>
              <div className="w-full p-4 overflow-y-scroll flex-1">
                <ul className="space-y-2">
                  {messages.map((message) => (
                    <li key={message.id} className="flex">
                      <div className="p-2 bg-gray-700 rounded dark:bg-darkmessageBackgroundColor max-w-full break-words">
                        <p className="text-sm text-gray-100 dark:text-white">
                          {message.message}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWindow;
