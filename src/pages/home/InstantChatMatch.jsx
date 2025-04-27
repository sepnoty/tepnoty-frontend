import React from "react";
import { useNavigate } from "react-router-dom";

function InstantChatMatch() {
  const navigate = useNavigate();

  const handleStartChat = () => {
    // Later we can start the actual chat
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">
      <h1 className="text-4xl font-bold mb-4">🎉 Match Found!</h1>
      <p className="text-lg text-gray-300 mb-8 text-center">
        You've been matched successfully with a like-minded person. Start chatting now!
      </p>

      <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 animate-ping shadow-xl mb-10"></div>

      <button
        onClick={handleStartChat}
        className="bg-green-600 hover:bg-green-700 transition-all text-white font-semibold py-3 px-8 rounded-full"
      >
        Start Chat ➔
      </button>
    </div>
  );
}

export default InstantChatMatch;
