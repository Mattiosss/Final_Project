// src/components/DuesForm.jsx
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const DuesForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !amount) {
      alert("Please fill in all fields");
      return;
    }

    try {
      await addDoc(collection(db, "dues"), {
        name: name,
        amount: parseFloat(amount),
        timestamp: Timestamp.now(),
      });

      alert("Dues added successfully!");
      setName("");
      setAmount("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded">
      <input
        type="text"
        placeholder="Member Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full mb-2 p-2 bg-gray-800 text-white rounded"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="block w-full mb-2 p-2 bg-gray-800 text-white rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click Me
      </button>
    </form>
  );
};

export default DuesForm;
