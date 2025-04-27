import React from "react";
import { useNavigate } from "react-router-dom";

function ActionCards() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl w-full">

      {/* Instant Match (Chat) */}
      <button
        onClick={() => navigate("/instant-chat-search")}
        className="bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-lg transition-all border border-white/20 hover-bounce"
      >
        🔗 Instant Match (Chat)
      </button>

      {/* Instant Match (Audio) */}
      <button
        onClick={() => navigate("/instant-audio-search")}
        className="bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-lg transition-all border border-white/20 hover-bounce"
      >
        🎤 Instant Match (Audio)
      </button>

      {/* Talk to AI */}
      <button
        onClick={() => navigate("/talk-to-ai")}
        className="bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-lg transition-all border border-white/20 hover-bounce"
      >
        🤖 Talk to AI
      </button>

      {/* Like-Minded List */}
      <button
        onClick={() => navigate("/like-minded-list")}
        className="bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-lg transition-all border border-white/20 hover-bounce"
      >
        💖 Like-Minded List
      </button>

    </div>
  );
}

export default ActionCards;
