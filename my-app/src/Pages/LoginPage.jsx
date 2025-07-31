import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from './icon.png';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";

const LoginPage = ({ onLogin }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        setError('');
        onLogin();
        navigate('/');
      })
      .catch((error) => {
        console.error("Login error code:", error.code);
        console.error("Login error message:", error.message);
        setError("Maling email o password.");
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* ✅ Logo and Title Section */}
        <div className="login-logo">
          <img src={logo} alt="Elite Coding Hub" className="logo-img" />
          <h1 className="logo-title">Elite Coding Hub</h1>
        </div>

        <h2 className="login-title">Login</h2>
        {error && <p className="login-error">{error}</p>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="login-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>

        {/* ✅ Added sign-up link below form */}
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Don't have an account?  <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
