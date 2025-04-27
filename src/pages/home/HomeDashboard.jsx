// src/pages/home/HomeDashboard.jsx

import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import MoodOrb from "../../components/MoodOrb";
import MoodSelector from "../../components/MoodSelector";
import ActionCards from "../../components/ActionCards";

function HomeDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [greeting, setGreeting] = useState("Hi 👋");
  const [dynamicTagline, setDynamicTagline] = useState("How are you feeling today?");

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const moodMessages = useMemo(() => [
    "It's okay to feel heavy sometimes.",
    "Your emotions are valid.",
    "Today is a fresh start.",
    "You are stronger than you think.",
    "Small steps matter too.",
    "Feeling lost is part of finding yourself.",
  ], []);

  const fetchProfile = useCallback(async () => {
    try {
      const email = localStorage.getItem("tepnoty_email");
      if (email) {
        const res = await axios.get(`http://localhost:5000/api/getProfile/${email}`);
        setProfile(res.data);
        console.log("Profile fetched ✅", res.data);
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  }, []);

  const updateGreeting = useCallback(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning 👋");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good Afternoon 👋");
    } else if (hour >= 17 && hour < 21) {
      setGreeting("Good Evening 👋");
    } else {
      setGreeting("Good Night 🌙");
    }
  }, []);

  const rotateDynamicTaglines = useCallback(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moodMessages.length);
      setDynamicTagline(moodMessages[randomIndex]);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [moodMessages]);

  useEffect(() => {
    fetchProfile();
    updateGreeting();
    const clearRotation = rotateDynamicTaglines();
    return () => clearRotation();
  }, [fetchProfile, updateGreeting, rotateDynamicTaglines]);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col items-center">

        {/* Greeting + Dynamic Tagline */}
        <div className="text-center mt-8 mb-4">
          <h1 className="text-4xl font-bold mb-2">
            {greeting} {profile ? profile.name : ""}
          </h1>
          <p className="text-md text-gray-300 italic animate-pulse">
            {dynamicTagline}
          </p>
        </div>

        {/* Mood Orb */}
        <div className="my-8">
          <MoodOrb />
        </div>

        {/* Mood Selector */}
        <div className="mb-10">
          <MoodSelector />
        </div>

        {/* Action Cards */}
        <div className="w-full max-w-3xl">
          <ActionCards />
        </div>

      </div>
    </div>
  );
}

export default HomeDashboard;
