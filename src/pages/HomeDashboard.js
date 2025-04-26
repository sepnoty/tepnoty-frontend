import React from "react";

function HomeDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-6 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Hi 👋</h1>
        <p className="text-lg text-gray-300">How are you feeling today?</p>
      </div>

      {/* Mood Orb */}
      <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 animate-pulse shadow-xl mb-10"></div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl w-full">
        <button className="bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-lg transition-all border border-white/20">
          🔗 Instant Match (Chat)
        </button>
        <button className="bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-lg transition-all border border-white/20">
          🎤 Instant Match (Audio)
        </button>
        <button className="bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-lg transition-all border border-white/20">
          🤖 Talk to AI
        </button>
        <button className="bg-white bg-opacity-10 hover:bg-opacity-20 p-4 rounded-lg transition-all border border-white/20">
          💖 Like-Minded List
        </button>
      </div>
    </div>
  );
}

export default HomeDashboard;
