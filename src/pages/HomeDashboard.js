import React, { useState } from "react";

function HomeDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">

      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-64" : "w-16"} transition-all duration-300 bg-black bg-opacity-30 backdrop-blur-md p-4 flex flex-col`}>
        {/* Toggle Button */}
        <button onClick={toggleSidebar} className="text-white mb-6 focus:outline-none">
          ☰
        </button>

        {/* Menu Items */}
        {sidebarOpen && (
          <div className="space-y-6 text-sm font-semibold">
            <button className="hover:text-purple-400">🧑 Profile</button>
            <button className="hover:text-purple-400">🚫 Blocked Profiles</button>
            <button className="hover:text-purple-400">❓ Help Center</button>
            <button className="hover:text-purple-400">⚙️ Settings</button>
            <button className="hover:text-purple-400">🚪 Logout</button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center">
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
    </div>
  );
}

export default HomeDashboard;
