import React from 'react';
import { useNavigate } from 'react-router-dom';

function SplashScreen() {
  const navigate = useNavigate();

  const handleAgree = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <div className="animate-fade-in mb-8">
        {/* Logo Animation can come here later */}
        <h1 className="text-4xl font-bold mb-2">Tepnoty</h1>
        <p className="text-lg">A place to feel heard</p>
      </div>
      <div className="text-center mb-6">
        <p className="text-sm">
          By continuing, you agree to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.
        </p>
      </div>
      <button
        onClick={handleAgree}
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
      >
        Agree & Continue
      </button>
    </div>
  );
}

export default SplashScreen;
