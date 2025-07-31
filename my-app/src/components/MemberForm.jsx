import { useState, useEffect } from 'react';
import { addDoc, updateDoc, collection, Timestamp, doc } from 'firebase/firestore';
import { db, auth } from '../firebaseconfig';
import { Card, CardContent, Button, Input } from "../components/ui.js";

export default function MemberForm({ onMemberAdded, editingMember, clearEditing }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (editingMember) {
      setName(editingMember.name);
      setAmount(editingMember.totalPaid);
    } else {
      setName('');
      setAmount('');
    }
  }, [editingMember]);

  const handleSubmit = async () => {
    if (!name || !amount) {
      alert("Please fill in both fields.");
      return;
    }

    const user = auth.currentUser;

    if (editingMember) {
      const ref = doc(db, 'members', editingMember.id);
      await updateDoc(ref, {
        name,
        totalPaid: parseFloat(amount),
        updatedAt: Timestamp.now(),
        email: user?.email || "unknown"
      });
      clearEditing();
    } else {
      await addDoc(collection(db, 'members'), {
        name,
        totalPaid: parseFloat(amount),
        paymentHistory: [
          {
            amount: parseFloat(amount),
            date: Timestamp.now(),
          },
        ],
        email: user?.email || "unknown",
        createdAt: Timestamp.now(),
      });
    }

    setName('');
    setAmount('');
    onMemberAdded();
  };

  return (
    <Card className="mb-6 bg-[#1b263b] text-white border border-[#415a77] shadow-md">
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
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
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded"
          >
            {editingMember ? 'Update' : 'Add Member'}
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setName('');
              setAmount('');
              clearEditing?.();
            }}
            className="border border-gray-400 text-gray-300 hover:bg-gray-700"
          >
            Clear Form
          </Button>
          {editingMember && (
            <Button
              onClick={clearEditing}
              className="bg-gray-500 hover:bg-gray-400 text-white font-bold px-4 py-2 rounded"
            >
              Cancel
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
