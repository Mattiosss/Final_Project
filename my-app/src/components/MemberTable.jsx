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

export default function MemberTable({ refreshTrigger }) {
  const [members, setMembers] = useState([]);

  const fetchMembers = async () => {
    const querySnapshot = await getDocs(collection(db, 'members'));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setMembers(data);
  };

  const deleteMember = async id => {
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
          
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map(member => (
          <TableRow key={member.id}>
            <TableCell>{member.name}</TableCell>
            <TableCell>${member.totalPaid.toFixed(2)}</TableCell>
            <TableCell>
              <Button variant="destructive" onClick={() => deleteMember(member.id)}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
