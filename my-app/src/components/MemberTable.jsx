import { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseconfig';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Button
} from '../components/ui.js';

export default function MemberTable({ refreshTrigger, onEdit }) {
  const [members, setMembers] = useState([]);

  const fetchMembers = async () => {
    const querySnapshot = await getDocs(collection(db, 'members'));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setMembers(data);
  };

  const deleteMember = async id => {
    const confirmed = window.confirm("Are you sure you want to delete this member?");
    if (!confirmed) return;

    await deleteDoc(doc(db, 'members', id));
    fetchMembers();
  };

  useEffect(() => {
    fetchMembers();
  }, [refreshTrigger]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map(member => (
          <TableRow key={member.id}>
            <TableCell>{member.name}</TableCell>
            <TableCell>₱{(member.totalPaid ?? 0).toFixed(2)}</TableCell>
            <TableCell className="flex gap-2 flex-wrap">
              <Button onClick={() => onEdit(member)}>Edit</Button>
              <Button onClick={() => deleteMember(member.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
