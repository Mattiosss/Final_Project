import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseconfig';

export default function ContributionTracker({ refreshTrigger }) {
  const [members, setMembers] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'members'));
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        const totalAmount = data.reduce((sum, member) => sum + (member.totalPaid || 0), 0);
        setMembers(data);
        setTotal(totalAmount);
      } catch (error) {
        console.error('Error fetching contributions:', error);
      }
    };

    fetchContributions();
  }, [refreshTrigger]);

  return (
    <div className="mt-6 bg-[#1b263b] p-4 rounded-lg border border-[#415a77] text-white">
      <h2 className="text-lg font-bold mb-3 text-center">Member Contributions</h2>
      <p className="text-center mb-4">Total Collected: <span className="font-semibold text-green-400">₱{total.toFixed(2)}</span></p>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-600">
            <th className="py-2 text-center">Name</th>
            <th className="py-2 text-center">Amount</th>
            <th className="py-2 text-center">Email</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.id} className="border-b border-gray-700">
              <td className="py-2 text-center">{member.name}</td>
              <td className="py-2 text-center">₱{member.totalPaid?.toFixed(2)}</td>
              <td className="py-2 text-center">{member.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
