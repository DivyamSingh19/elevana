import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-black p-4">
      <div className="text-white text-xl font-bold">
        100xDevs
      </div>

      <div className="flex items-center space-x-6 bg-zinc-900 rounded-full px-6 py-2">
        <a href="#" className="text-white hover:text-gray-300">Course</a>
        <a href="#" className="text-white hover:text-gray-300">Testimonials</a>
        <a href="#" className="text-white hover:text-gray-300">FAQs</a>
      </div>

      <button className="bg-black text-white px-4 py-2 rounded-full border border-white hover:bg-white hover:text-black">
        Login
      </button>
    </nav>
  );
};

export default Navbar;