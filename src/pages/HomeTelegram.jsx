import React from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

const HomeTelegram = () => {
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-2/5 lg:w-[30%]">
        <Sidebar  />
      </div>
      <div className="lg:w-[70%] h-full hidden sm:w-1/2 md:w-3/5 sm:block">
        <ChatWindow />
      </div>
    </>
  );
};

export default HomeTelegram;
