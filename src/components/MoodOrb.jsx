import React, { useState, useEffect } from "react";

function MoodOrb() {
  const [mood, setMood] = useState("Not Sure");

  useEffect(() => {
    const savedMood = localStorage.getItem("tepnoty_mood") || "Not Sure";
    setMood(savedMood);
  }, []);

  const getOrbGradient = () => {
    switch (mood.toLowerCase()) {
      case "happy":
        return "from-yellow-400 via-yellow-500 to-yellow-600";
      case "sad":
        return "from-blue-400 via-blue-500 to-blue-600";
      case "angry":
        return "from-red-500 via-red-600 to-red-700";
      case "not sure":
      default:
        return "from-purple-400 via-purple-500 to-purple-600";
    }
  };

  return (
    <div
      className={`w-40 h-40 rounded-full bg-gradient-to-tr ${getOrbGradient()} animate-pulse shadow-2xl mb-8 transition-all duration-700`}
    ></div>
  );
}

export default MoodOrb;
