import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function GenderInput() {
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (gender.trim() === "") {
      alert("Please select your gender");
      return;
    }

    // Save Gender to localStorage
    localStorage.setItem("tepnoty_gender", gender);

    // Navigate to next step
    navigate("/profile/email");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-4">
      <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold mb-6 text-center">What’s your gender?</h2>

        <form onSubmit={handleNext} className="space-y-6 flex flex-col items-center">
          <div className="flex flex-col space-y-4 w-full">
            <button
              type="button"
              onClick={() => setGender("Male")}
              className={`py-2 rounded ${gender === "Male" ? "bg-purple-600" : "bg-black"} text-white border border-white/30`}
            >
              Male
            </button>
            <button
              type="button"
              onClick={() => setGender("Female")}
              className={`py-2 rounded ${gender === "Female" ? "bg-purple-600" : "bg-black"} text-white border border-white/30`}
            >
              Female
            </button>
            <button
              type="button"
              onClick={() => setGender("Other")}
              className={`py-2 rounded ${gender === "Other" ? "bg-purple-600" : "bg-black"} text-white border border-white/30`}
            >
              Other
            </button>
          </div>

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

export default GenderInput;
