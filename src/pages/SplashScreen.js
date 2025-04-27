// src/pages/SplashScreen.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRegHeart } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import TepnotyLogo from '../assets/tepnoty-logo.png';
import AnonymousProfile from '../components/AnonymousProfile';

// ⬇️ Move this OUTSIDE the component ✅
const allTestimonials = [
  { name: "Arjun", place: "Hyderabad", message: "Tepnoty gave me peace when I needed it most." },
  { name: "Priya", place: "Mumbai", message: "Finally, a place where I can share without fear." },
  { name: "Rahul", place: "Bangalore", message: "Talking on Tepnoty felt like someone truly cared." },
  { name: "Sana", place: "Delhi", message: "Here, I finally felt understood without being judged." },
  { name: "Kabir", place: "Chennai", message: "Tepnoty helped me heal silently and safely." },
  { name: "Ananya", place: "Pune", message: "Found comfort when I had no one else." },
  { name: "Vikram", place: "Kolkata", message: "Felt truly listened to for the first time." },
  { name: "Meera", place: "Jaipur", message: "An emotional safe place beyond words." },
];

function SplashScreen() {
  const navigate = useNavigate();

  const taglines = [
    "A place to feel heard",
    "Where emotions find home",
    "Talk. Feel. Heal.",
    "Because You Matter",
    "Let's walk through feelings together",
    "Every voice deserves to be heard",
    "Healing starts with listening",
    "Feel the connection, not the silence",
  ];

  const [currentTestimonials, setCurrentTestimonials] = useState([]);

  const shuffleTestimonials = useCallback(() => {
    const shuffled = [...allTestimonials].sort(() => 0.5 - Math.random());
    setCurrentTestimonials(shuffled.slice(0, 4));
  }, []);

  useEffect(() => {
    shuffleTestimonials(); // First shuffle
    const interval = setInterval(() => {
      shuffleTestimonials();
    }, 8000); // Shuffle every 8 seconds
    return () => clearInterval(interval);
  }, [shuffleTestimonials]);

  const handleAgree = () => {
    navigate('/login');
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      {/* Background Blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 opacity-20 rounded-full blur-3xl top-0 left-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl bottom-0 left-0"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Left Section */}
      <div className="flex flex-col justify-center items-center text-center md:w-1/2 px-6 py-12 relative z-10">
        <motion.img
          src={TepnotyLogo}
          alt="Tepnoty Logo"
          className="w-32 mb-6 object-contain"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Dynamic Typing Tagline */}
        <h1 className="text-3xl md:text-4xl font-bold min-h-[50px]">
          <Typewriter
            words={taglines}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-between items-center text-center md:w-1/2 px-6 py-8 relative z-10">

        {/* Trusted by thousands */}
        <motion.p
          className="text-sm text-gray-400 mt-6 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Trusted by thousands seeking a listening ear <FaRegHeart className="text-pink-400" />
        </motion.p>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full mt-8">
          {currentTestimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg flex flex-col items-center transition-all"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{ delay: index * 0.2, duration: 4, repeat: Infinity, repeatType: "reverse" }}
            >
              <AnonymousProfile />
              <p className="font-bold mt-2">{item.name}</p>
              <p className="text-gray-300 italic text-sm mt-1">{item.message}</p>
              <p className="text-xs text-gray-400 mt-2 opacity-70">{item.place}</p>
            </motion.div>
          ))}
        </div>

        {/* Terms and Agree Button */}
        <div className="flex flex-col items-center mt-10 mb-4">
          <p className="text-xs text-gray-400 mb-3">
            By continuing, you agree to our{' '}
            <a href="/terms" className="underline hover:text-white">Terms of Service</a> and{' '}
            <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.
          </p>

          <motion.button
            onClick={handleAgree}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 hover:opacity-90 text-black font-semibold py-3 px-8 rounded-full shadow-xl transition-all duration-300"
          >
            Agree & Continue
          </motion.button>
        </div>

      </div>

    </motion.div>
  );
}

export default SplashScreen;
