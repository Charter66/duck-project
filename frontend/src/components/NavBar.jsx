import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/home" className="text-white text-xl font-bold">
          Home
        </Link>
        <div className="space-x-4">
          <Link to="/create" className="text-white hover:text-gray-300">
            Create a Duck
          </Link>
          <Link to="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
          <Link to="/register" className="text-white hover:text-gray-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
