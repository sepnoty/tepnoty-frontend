import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePicInput() {
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // We will just store file name for now (later can upload if needed)
      setProfilePic(file.name);
      localStorage.setItem("tepnoty_profile_pic", file.name);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    // If user didn’t upload, still go ahead
    if (!profilePic) {
      localStorage.setItem("tepnoty_profile_pic", ""); // Empty profile pic
    }
    navigate("/profile/summary");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-4">
      <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white/20 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6 text-center">Add a profile picture (optional)</h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="text-sm text-gray-400 mb-4"
        />

        {profilePic && (
          <div className="text-sm text-green-400 mb-4">
            Selected: {profilePic}
          </div>
        )}

        <button
          onClick={handleNext}
          className="w-full bg-purple-600 hover:bg-purple-700 transition-all text-white font-semibold py-2 rounded mt-4"
        >
          Next ➔
        </button>

        <p className="text-xs text-gray-400 mt-2">(You can also skip this)</p>
      </div>
    </div>
  );
}

export default ProfilePicInput;
