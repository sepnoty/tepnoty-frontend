// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main Pages
import SplashScreen from './pages/SplashScreen';
import PhoneLogin from './pages/PhoneLogin';
import OtpVerification from './pages/OtpVerification';
import HomeDashboard from './pages/home/HomeDashboard';

// Profile Setup Pages
import NameInput from './pages/profile/NameInput';
import DobInput from './pages/profile/DobInput';
import GenderInput from './pages/profile/GenderInput';
import EmailInput from './pages/profile/EmailInput';
import BioInput from './pages/profile/BioInput';
import ProfilePicInput from './pages/profile/ProfilePicInput';
import ProfileSummary from './pages/profile/ProfileSummary';

// Home Sub Pages
import InstantChatSearch from './pages/home/InstantChatSearch';
import InstantChatMatch from './pages/home/InstantChatMatch';
import InstantChatNoMatch from './pages/home/InstantChatNoMatch';
import InstantAudioSearch from './pages/home/InstantAudioSearch';
import InstantAudioMatch from './pages/home/InstantAudioMatch';
import InstantAudioNoMatch from './pages/home/InstantAudioNoMatch';
import TalkToAI from './pages/home/TalkToAI';
import LikeMindedList from './pages/home/LikeMindedList';

// -------------------------------
// Main AppRoutes (without Page Loader)
// -------------------------------
function AppRoutes() {
  return (
    <Routes>

      {/* Splash + Login Flow */}
      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<PhoneLogin />} />
      <Route path="/otp" element={<OtpVerification />} />

      {/* Home Dashboard */}
      <Route path="/home" element={<HomeDashboard />} />

      {/* Instant Chat Flow */}
      <Route path="/instant-chat-search" element={<InstantChatSearch />} />
      <Route path="/instant-chat-match" element={<InstantChatMatch />} />
      <Route path="/instant-chat-no-match" element={<InstantChatNoMatch />} />

      {/* Instant Audio Flow */}
      <Route path="/instant-audio-search" element={<InstantAudioSearch />} />
      <Route path="/instant-audio-match" element={<InstantAudioMatch />} />
      <Route path="/instant-audio-no-match" element={<InstantAudioNoMatch />} />

      {/* Talk to AI Flow */}
      <Route path="/talk-to-ai" element={<TalkToAI />} />

      {/* Like-Minded List */}
      <Route path="/like-minded-list" element={<LikeMindedList />} />

      {/* Profile Setup Flow */}
      <Route path="/profile/name" element={<NameInput />} />
      <Route path="/profile/dob" element={<DobInput />} />
      <Route path="/profile/gender" element={<GenderInput />} />
      <Route path="/profile/email" element={<EmailInput />} />
      <Route path="/profile/bio" element={<BioInput />} />
      <Route path="/profile/profile-pic" element={<ProfilePicInput />} />
      <Route path="/profile/summary" element={<ProfileSummary />} />

    </Routes>
  );
}

// ---------------------------
// Router Main Entry
// ---------------------------
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
