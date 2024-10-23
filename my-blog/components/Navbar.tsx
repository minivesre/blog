import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-blue-900 text-white sticky top-0 z-10">
      <h1 className="text-lg font-bold">MY BLOG</h1>
      <ul className="flex space-x-6">
        <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
        <li><a href="#about" className="hover:text-yellow-400">About Me</a></li>
        <li><a href="#more" className="hover:text-yellow-400">More</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
