import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MemberForm from '../components/MemberForm';
import MemberTable from '../components/MemberTable';
import './Dashboard.css';

function HomePage({ onLogout }) {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [editingMember, setEditingMember] = useState(null);
  const navigate = useNavigate();

  const refreshMembers = () => setRefreshTrigger(prev => prev + 1);

  return (
    <div className="dashboard-container">
      {/* ✅ Header with logo + view all members + logout */}
      <div className="dashboard-header-centered">
        <div className="dashboard-header-left">
          <img src="/icon.png" alt="Logo" className="logo-img" />
          <h1 className="logo-title">Elite Coding Club</h1>
        </div>

        <div className="dashboard-header-buttons">
          <button
            className="profile-button"
            onClick={() => navigate('/member')}
          >
            View All Members
          </button>
          <button onClick={onLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>

      {/* ✅ Profile box */}
      <div className="profile-fixed">
        <img src="/matthew.jpg" alt="Profile" className="profile-img" />
        <h2 className="profile-name">Matthew Cabusay</h2>
        <p className="profile-role">Game Developer</p>
        <p className="profile-email">matthew.cabusay@ciit.edu.ph</p>
      </div>

      {/* ✅ Main content */}
      <div className="dashboard-main-content">
        <div className="dashboard-right-content">
          <div className="dashboard-form-card">
            <MemberForm
              onMemberAdded={refreshMembers}
              editingMember={editingMember}
              clearEditing={() => setEditingMember(null)}
            />
          </div>

          <div className="dashboard-table-card">
            <MemberTable
              refreshTrigger={refreshTrigger}
              onEdit={member => setEditingMember(member)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
