import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-stone-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Landmark size={24} />
          <span className="text-xl font-semibold">Society of Antiquaries</span>
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-stone-300 transition">Entrance Hall</Link>
          <Link to="/meeting-room" className="hover:text-stone-300 transition">Meeting Room</Link>
          <Link to="/council-room" className="hover:text-stone-300 transition">Council Room</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;