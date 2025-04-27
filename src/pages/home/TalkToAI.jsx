import React from "react";

function TalkToAI() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">🤖 Talk to Tepnoty AI</h1>
      <p className="text-lg text-gray-300 mb-10 text-center max-w-md">
        Our AI is here to listen, support, and chat with you anytime! Start typing below and let’s connect. 💬
      </p>

      {/* Chat input box - design only for now */}
      <input
        type="text"
        placeholder="Say something..."
        className="w-full max-w-md px-4 py-2 rounded bg-black text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
      />

      {/* Future: Chat messages will appear here */}
      <div className="w-full max-w-md text-center text-gray-500 text-sm">
        (Chat feature coming soon 🚀)
      </div>
    </div>
  );
}

export default TalkToAI;
