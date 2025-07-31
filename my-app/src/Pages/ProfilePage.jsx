import './LoginPage.css'; // ✅ Reuse login styling


const ProfilePage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* ✅ Profile Picture */}
        <div className="login-logo">
          <img src="/rdj.jpg" alt="Robert Downey Jr." className="profile-img-circle" />
          <h1 className="profile-name-small">Robert Downey Jr.</h1>
        </div>

        {/* ✅ Profile Details */}
        <h2 className="profile-email-small">robert@starkindustries.com</h2>

        {/* ✅ Back to Home Button */}
        <button
          className="login-button"
          onClick={() => window.history.back()}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
