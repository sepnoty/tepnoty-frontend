import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DobInput() {
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (dob.trim() === "") {
      alert("Please select your date of birth");
      return;
    }

    // Save DOB to localStorage
    localStorage.setItem("tepnoty_dob", dob);

    // Navigate to next step
    navigate("/profile/gender");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-4">
      <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold mb-6 text-center">When’s your birthday?</h2>

        <form onSubmit={handleNext} className="space-y-6">
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full px-4 py-2 rounded bg-black text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
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

export default DobInput;
