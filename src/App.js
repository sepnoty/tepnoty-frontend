import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main Pages
import SplashScreen from './pages/SplashScreen';
import PhoneLogin from './pages/PhoneLogin';
import OtpVerification from './pages/OtpVerification';
import HomeDashboard from './pages/HomeDashboard';

// Profile Setup Pages
import NameInput from './pages/profile/NameInput';
import DobInput from './pages/profile/DobInput';
import GenderInput from './pages/profile/GenderInput';
import EmailInput from './pages/profile/EmailInput';
import BioInput from './pages/profile/BioInput';
import ProfilePicInput from './pages/profile/ProfilePicInput';
import ProfileSummary from './pages/profile/ProfileSummary';

function App() {
  return (
    <Router>
      <Routes>

        {/* Splash + Login Flow */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<PhoneLogin />} />
        <Route path="/otp" element={<OtpVerification />} />

        {/* Home Dashboard */}
        <Route path="/home" element={<HomeDashboard />} />

        {/* Profile Setup Flow (Step-by-Step Pages) */}
        <Route path="/profile/name" element={<NameInput />} />
        <Route path="/profile/dob" element={<DobInput />} />
        <Route path="/profile/gender" element={<GenderInput />} />
        <Route path="/profile/email" element={<EmailInput />} />
        <Route path="/profile/bio" element={<BioInput />} />
        <Route path="/profile/profile-pic" element={<ProfilePicInput />} />
        <Route path="/profile/summary" element={<ProfileSummary />} />

        {/* Settings Page - (Coming soon if needed) */}
        {/* <Route path="/settings" element={<Settings />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
