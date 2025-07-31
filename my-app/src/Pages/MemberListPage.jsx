import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseconfig";
import { useNavigate } from "react-router-dom";
import './LoginPage.css'; // ✅ Import the same CSS used by LoginPage

export default function MemberListPage() {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMembers = async () => {
      const snapshot = await getDocs(collection(db, "members"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMembers(data);
    };

    fetchMembers();
  }, []);

  const totalCollected = members.reduce(
    (total, member) => total + (member.totalPaid || 0),
    0
  );

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Member Contributions</h2>
        <p style={{ textAlign: "center", color: "lightgreen", marginBottom: "1rem" }}>
          Total Collected: ₱{totalCollected.toFixed(2)}
        </p>

        <div style={{ overflowX: "auto", marginBottom: "1rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", color: "white" }}>
            <thead>
              <tr style={{ backgroundColor: "#0d1b2a" }}>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Amount</th>
                <th style={thStyle}>Email</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} style={{ textAlign: "left" }}>
                  <td style={tdStyle}>{member.name}</td>
                  <td style={tdStyle}>₱{member.totalPaid?.toFixed(2)}</td>
                  <td style={tdStyle}>{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={() => navigate("/")}
          className="login-button"
          style={{ marginTop: "1rem" }}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "10px",
  borderBottom: "1px solid #415a77",
  textAlign: "left",
};

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #415a77",
};
