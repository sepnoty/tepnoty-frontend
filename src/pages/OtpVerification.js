import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OtpVerification() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp === "1234") {
      navigate("/home");
    } else {
      alert("Invalid OTP. Try 1234");
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
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all text-white font-semibold py-2 rounded"
          >
            Verify & Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtpVerification;
