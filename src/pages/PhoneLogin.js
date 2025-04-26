import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PhoneLogin() {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();
    // Here you’d send OTP and redirect
    if (phone.length === 10) {
      navigate("/otp");
    } else {
      alert("Enter valid 10-digit phone number");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-4">
      <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white/20">
        <h2 className="text-3xl font-bold mb-4 text-center">Tepnoty Login</h2>
        <p className="text-sm text-center text-gray-300 mb-6">Enter your phone number to continue</p>
        <form onSubmit={handleSendOtp} className="space-y-4">
          <input
            type="tel"
            placeholder="Enter 10-digit number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 rounded bg-black text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
            maxLength={10}
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all text-white font-semibold py-2 rounded"
          >
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default PhoneLogin;
