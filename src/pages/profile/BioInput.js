import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BioInput() {
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();

    // Save Bio to localStorage (even if empty, because it's optional)
    localStorage.setItem("tepnoty_bio", bio);

    // Navigate to next step
    navigate("/profile/profile-pic");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-4">
      <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold mb-6 text-center">Write a short bio (optional)</h2>

        <form onSubmit={handleNext} className="space-y-6">
          <textarea
            placeholder="Tell us about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full h-32 px-4 py-2 rounded bg-black text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all text-white font-semibold py-2 rounded"
          >
            Next ➔
          </button>
        </form>
      </div>
    </div>
  );
}

export default BioInput;
