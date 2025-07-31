import { useState } from 'react';
import './LoginPage.css'; // Reusing the same CSS styles
import logo from './icon.png';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseconfig'; // Adjust if path is different

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User registered successfully!');
      window.location.href = '/login'; // Redirect to login
    } catch (err) {
      console.error('Signup error:', err.message);
      setError('Signup failed: ' + err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">
          <img src={logo} alt="Elite Coding Hub" className="logo-img" />
          <h1 className="logo-title">Elite Coding Hub</h1>
        </div>

        <h2 className="login-title">Sign Up</h2>
        {error && <p className="login-error">{error}</p>}
        <form onSubmit={handleSignup} className="login-form">
          <div className="login-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Log in here</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
