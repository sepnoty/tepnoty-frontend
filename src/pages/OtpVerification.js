import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function OtpVerification() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber; // Passed from PhoneLogin

  const handleVerify = async (e) => {
    e.preventDefault();

    if (otp !== "1234") {
      alert("Invalid OTP. Try 1234");
      return;
    }

    try {
      setLoading(true);

      console.log("OTP Verified ✅");

      // Check if user already exists by phoneNumber
      const res = await axios.get(`http://localhost:5000/api/checkProfile/${phoneNumber}`);

      if (res.data.exists) {
        console.log("Existing user, redirecting to Home 🏡");
        localStorage.setItem("tepnoty_phoneNumber", phoneNumber);
        navigate("/home");
      } else {
        console.log("New user, redirecting to Profile Setup 📝");
        localStorage.setItem("tepnoty_phoneNumber", phoneNumber);
        navigate("/profile/name");
      }
    } catch (error) {
      console.error("Error during OTP verification or phone number check:", error);
      alert("Something went wrong, please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-4">
      <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white/20">
        <h2 className="text-3xl font-bold mb-4 text-center">Verify OTP</h2>
        <p className="text-sm text-center text-gray-300 mb-6">Enter the 4-digit code sent to your number</p>
        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="text"
            placeholder="Enter OTP (Try 1234)"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-2 rounded bg-black text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
            maxLength={4}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all text-white font-semibold py-2 rounded"
          >
            {loading ? "Verifying..." : "Verify & Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtpVerification;
