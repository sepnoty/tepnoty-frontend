// src/pages/PhoneLogin.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function PhoneLogin() {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();

    if (phone.length === 10) {
      const fullPhoneNumber = countryCode + phone;
      console.log("Phone entered:", fullPhoneNumber);
      navigate("/otp", { state: { phoneNumber: fullPhoneNumber } });
    } else {
      alert("Please enter a valid 10-digit phone number");
    }
  };

  return (
    <motion.div
      className="h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="max-w-md w-full bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Tepnoty Login</h2>
        <p className="text-sm text-center text-gray-400 mb-6">
          Enter your phone number to continue
        </p>

        <form onSubmit={handleSendOtp} className="space-y-4">
          <div className="flex gap-2">
            {/* Country Code Selector */}
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="bg-[#111827] text-white p-2 rounded-lg outline-none"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
            </select>

            {/* Phone Number Input */}
            <input
              type="tel"
              placeholder="Enter 10-digit number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-[#111827] text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
              maxLength={10}
            />
          </div>

          {/* Send OTP Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 hover:opacity-90 transition-all text-black font-semibold py-2 rounded-lg shadow-md"
          >
            Send OTP
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default PhoneLogin;
