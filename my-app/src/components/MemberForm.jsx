import { useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../firebaseconfig';
import { Card, CardContent, Button, Input } from "../components/ui.js";

export default function MemberForm({ onMemberAdded }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const addMember = async () => {
    if (!name || !amount) {
      alert("Please fill in both fields.");
      return;
    }

    await addDoc(collection(db, 'start'), {
      name,
      totalPaid: parseFloat(amount),
      paymentHistory: [
        {
          amount: parseFloat(amount),
          date: Timestamp.now(),
        },
      ],
    });

    setName('');
    setAmount('');
    onMemberAdded();
  };

  return (
    <Card className="mb-6 bg-[#1b263b] text-white border border-[#415a77] shadow-md">
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Member Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="bg-[#0d1b2a] text-white placeholder-gray-400 border border-[#415a77] rounded px-3 py-2"
          />
          <Input
            placeholder="Amount"
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            className="bg-[#0d1b2a] text-white placeholder-gray-400 border border-[#415a77] rounded px-3 py-2"
          />
          <Button
            onClick={addMember}
            disabled={!name || !amount}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded disabled:opacity-50"
          >
            Add Member
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
