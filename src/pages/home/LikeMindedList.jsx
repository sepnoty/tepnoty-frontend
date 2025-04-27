import React from "react";

function LikeMindedList() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-4">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-center">💖 Like-Minded List</h1>

      {/* Description */}
      <p className="text-lg text-gray-300 mb-6 text-center max-w-md">
        Here you’ll find the wonderful people you’ve connected with!  
      </p>

      {/* Empty State Section */}
      <div className="flex flex-col items-center space-y-6 mt-4">

        {/* Icon */}
        <div className="text-6xl animate-pulse">💬</div>

        {/* Friendly Empty Message */}
        <p className="text-gray-400 text-center max-w-xs">
          You haven't connected with anyone yet.  
          <br />
          Start chatting and fill this space with positivity! 🚀
        </p>

        {/* CTA Button */}
        <button
          onClick={() => window.location.href = "/home"}
          className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition-all"
        >
          ➔ Go Find New Friends
        </button>

      </div>
      
    </div>
  );
}

export default LikeMindedList;
