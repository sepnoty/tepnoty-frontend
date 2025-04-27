import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function InstantAudioSearch() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundMatch = Math.random() < 0.7;

      if (foundMatch) {
        navigate("/instant-audio-match");
      } else {
        navigate("/instant-audio-no-match");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-4">
      <div className="text-center space-y-6">
        <div className="w-20 h-20 border-4 border-dashed border-green-500 rounded-full animate-spin mx-auto"></div>
        <h2 className="text-2xl font-semibold">Searching for an audio buddy...</h2>
        <p className="text-gray-400 text-sm">Hold tight, we're connecting you!</p>
      </div>
    </div>
  );
}

export default InstantAudioSearch;
