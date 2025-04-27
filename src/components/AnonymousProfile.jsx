import React from 'react';
import { FaUser } from 'react-icons/fa'; // User Icon

function AnonymousProfile() {
  return (
    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 flex items-center justify-center text-white text-2xl shadow-lg">
      <FaUser />
    </div>
  );
}

export default AnonymousProfile;
