import React from "react";

function MoodSelector() {
  const handleMoodChange = (newMood) => {
    localStorage.setItem("tepnoty_mood", newMood);
    window.location.reload(); // Quick reload to show updated mood orb
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {/* Happy Button */}
      <button
        onClick={() => handleMoodChange("Happy")}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-full transition-all"
      >
        😊 Happy
      </button>

      {/* Sad Button */}
      <button
        onClick={() => handleMoodChange("Sad")}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-all"
      >
        😢 Sad
      </button>

      {/* Angry Button */}
      <button
        onClick={() => handleMoodChange("Angry")}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-all"
      >
        😡 Angry
      </button>

      {/* Not Sure Button */}
      <button
        onClick={() => handleMoodChange("Not Sure")}
        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-full transition-all"
      >
        🤔 Not Sure
      </button>
    </div>
  );
}

export default MoodSelector;
