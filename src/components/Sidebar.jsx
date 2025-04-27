import React, { useState } from "react";

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
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
  );
}

export default Sidebar;
