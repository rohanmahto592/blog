// components/Navbar.tsx
'use client'
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <span className="text-white cursor-pointer hover:text-gray-300">Register</span>
              </Link>
            </li>
            <li>
              <Link href="/signIn">
                <span className="text-white cursor-pointer hover:text-gray-300">Sign In</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
