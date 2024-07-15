import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [chatName, setChatName] = useState(null);

  return (
    <CounterContext.Provider value={{ selectedChatId, setSelectedChatId, chatName, setChatName }}>
      {children}
    </CounterContext.Provider>
  );
};
