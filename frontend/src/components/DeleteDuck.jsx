import React from 'react';
import axios from 'axios';

const DeleteButton = ({ duckId }) => {
  const handleDelete = async () => {
    console.log(duckId)
    try {
      await axios.delete(`https://duck-project1.onrender.com/duck/${duckId}`);
      console.log(duckId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
      Delete
    </button>
  );
};

export default DeleteButton;
