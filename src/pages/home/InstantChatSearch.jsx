import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function InstantChatSearch() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate searching for 3 seconds
    const timer = setTimeout(() => {
      const foundMatch = Math.random() < 0.7; // 70% chance to find match for now

      if (foundMatch) {
        navigate("/instant-chat-match");
      } else {
        navigate("/instant-chat-no-match");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-4">
      <div className="text-center space-y-6">
        <div className="w-20 h-20 border-4 border-dashed border-purple-500 rounded-full animate-spin mx-auto"></div>
        <h2 className="text-2xl font-semibold">Searching for a chat buddy...</h2>
        <p className="text-gray-400 text-sm">Hold tight, magic is happening!</p>
      </div>
    </div>
  );
}

export default InstantChatSearch;
