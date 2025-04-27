import React from "react";

function InstantAudioMatch() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-4">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold mb-4">🎉 Audio Match Found!</h2>
        <p className="text-lg">You've been matched successfully for a voice chat. Start talking!</p>
        <button className="mt-8 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full font-semibold transition-all">
          Start Audio Call ➔
        </button>
      </div>
    </div>
  );
}

export default InstantAudioMatch;
