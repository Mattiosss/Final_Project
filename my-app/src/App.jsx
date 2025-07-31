import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import MemberListPage from './Pages/MemberListPage'; // ✅ New import

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        {/* ✅ Home route */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <HomePage onLogout={() => setIsLoggedIn(false)} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* ✅ Member contributions page */}
        <Route
          path="/member"
          element={
            isLoggedIn ? <MemberListPage /> : <Navigate to="/login" />
          }
        />

        {/* ✅ Login route */}
        <Route
          path="/login"
          element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
        />

        {/* ✅ Signup route */}
        <Route path="/signup" element={<SignupPage />} />

        {/* ✅ Profile route (if needed in future) */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}
