import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import PhoneLogin from './pages/PhoneLogin';
import OtpVerification from './pages/OtpVerification';
import HomeDashboard from './pages/HomeDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<PhoneLogin />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/home" element={<HomeDashboard />} />
        {/* more routes later */}
      </Routes>
    </Router>
  );
}

export default App;
