import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProfileSummary() {
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = () => {
      const name = localStorage.getItem("tepnoty_name") || "";
      const dob = localStorage.getItem("tepnoty_dob") || "";
      const gender = localStorage.getItem("tepnoty_gender") || "";
      const email = localStorage.getItem("tepnoty_email") || "";
      const bio = localStorage.getItem("tepnoty_bio") || "";
      const profilePic = localStorage.getItem("tepnoty_profile_pic") || "";
      const phoneNumber = localStorage.getItem("phoneNumber") || ""; // Fetch phone number

      setProfileData({ name, dob, gender, email, bio, profilePic, phoneNumber });
    };

    fetchProfileData();
  }, []);

  const handleFinish = async () => {
    try {
      setLoading(true);

      // POST profile data to backend
      const response = await axios.post('http://localhost:5000/api/saveProfile', profileData);

      if (response.status === 201) {
        console.log("✅ Profile saved successfully to backend!");

        // After successful save → Navigate to Home
        navigate("/home");
      } else {
        console.error("⚠️ Unexpected response from server:", response);
        alert("Something went wrong while saving profile. Please try again.");
      }
    } catch (error) {
      console.error("❌ Failed to save profile:", error);
      alert("Failed to save profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-4">
      <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold mb-6 text-center">Review Your Profile</h2>

        <div className="space-y-4 text-sm text-gray-300">
          <p><span className="text-white font-semibold">Name:</span> {profileData.name || "Not set"}</p>
          <p><span className="text-white font-semibold">DOB:</span> {profileData.dob || "Not set"}</p>
          <p><span className="text-white font-semibold">Gender:</span> {profileData.gender || "Not set"}</p>
          <p><span className="text-white font-semibold">Email:</span> {profileData.email || "Not set"}</p>
          <p><span className="text-white font-semibold">Bio:</span> {profileData.bio || "Not set"}</p>
          <p><span className="text-white font-semibold">Profile Pic:</span> {profileData.profilePic || "Not uploaded"}</p>
          <p><span className="text-white font-semibold">Phone Number:</span> {profileData.phoneNumber || "Not set"}</p>
        </div>

        <button
          onClick={handleFinish}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 transition-all text-white font-semibold py-2 rounded mt-8"
        >
          {loading ? "Saving..." : "Finish ➔ Go Home"}
        </button>
      </div>
    </div>
  );
}

export default ProfileSummary;
