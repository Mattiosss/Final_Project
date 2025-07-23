import { useState } from 'react';
import MemberForm from './components/MemberForm';
import MemberTable from './components/MemberTable';

export default function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const refreshMembers = () => setRefreshTrigger(prev => prev + 1);

  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Elite Coding Club</h1>

      <div className="bg-[#1b263b] p-6 rounded-lg shadow-lg w-full max-w-md">
        <MemberForm onMemberAdded={refreshMembers} />
      </div>

      <div className="mt-8 w-full max-w-4xl">
        <MemberTable refreshTrigger={refreshTrigger} />
      </div>
    </div>
  );
}
