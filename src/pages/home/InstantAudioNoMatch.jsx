import React from "react";
import { useNavigate } from "react-router-dom";

function InstantAudioNoMatch() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-4">
      
      {/* Icon */}
      <div className="text-6xl mb-6 animate-pulse">🎧</div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-center">No Audio Match Found</h1>

      {/* Friendly Message */}
      <p className="text-gray-400 text-center max-w-xs mb-6">
        Good conversations take time! 🎤  
        No audio match now — but your next buddy might be just one more try away! 🚀
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/instant-audio-search")}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition-all"
        >
          🔄 Try Again
        </button>
        <button
          onClick={() => navigate("/home")}
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-full transition-all"
        >
          🏠 Go Home
        </button>
      </div>

    </div>
  );
}

export default InstantAudioNoMatch;
