import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import { CounterContext } from "../context/CounterSelectedChatId";
import { useMediaQuery } from "@react-hook/media-query"; // Import useMediaQuery

const Sidebar = () => {
  const [chats, setChats] = useState([]);
  const { setSelectedChatId } = useContext(CounterContext);
  const navigate = useNavigate();
  const isSmallDevice = useMediaQuery("(max-width: 768px)"); // Media query for small devices

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get(
          "https://devapi.beyondchats.com/api/get_all_chats?page=1"
        );
        if (response.data && response.data.data) {
          setChats(response.data.data.data);
        } else {
          console.error("API response is not as expected:", response.data);
        }
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  const provideId = (chatId) => {
    if (isSmallDevice) {
      navigate(`/${chatId}`); 
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <SearchBar />
        <div className="overflow-y-scroll bg-darklightFilledColor">
          {chats.map((chat) => (
            <div
              className="flex items-center p-4 bg-darklightFilledColor text-white mt-1 cursor-pointer"
              key={chat.creator.id}
              onClick={() => {
                setSelectedChatId(chat.creator.id);
                provideId(chat.creator.id); // Call provideId on click
              }}
            >
              <img
                src="https://th.bing.com/th/id/OIP.YhuQ6IzRB9ZbOi8aOCW0kgAAAA?w=284&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Profile Image"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-4 flex-1">
                <p className="text-lg font-semibold">
                  {chat.creator.name !== null ? chat.creator.name : "Unknown"}
                </p>
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
