import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeTelegram from "./pages/HomeTelegram";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import MobileChatWindow from "./components/MobileChatWindow";

const App = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`flex flex-col h-screen ${isDarkMode ? "dark" : ""}`}>
        {/* <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} /> */}
        <div className="flex flex-1">
          <Routes>
            <Route path="/" element={<HomeTelegram />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/:chatId" element={<MobileChatWindow />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
