"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-20 py-4 flex justify-between items-center">
        {/* Logo yoki sayt nomi */}
        <div className="text-xl font-bold">
          <Link href="/" className="text-gray-800 hover:text-blue-500">
            MySite
          </Link>
        </div>

        {/* Desktop menyu */}
        <ul className="hidden md:flex gap-8">
          <Link href="/">
            <li className="cursor-pointer hover:text-blue-500 transition duration-300">xizmatlar</li>
          </Link>
          <Link href="/about">
            <li className="cursor-pointer hover:text-blue-500 transition duration-300">About</li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer hover:text-blue-500 transition duration-300">Contact</li>
          </Link>
        </ul>

        {/* Mobile menyu (hamburger icon) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (open/close) */}
      <div
        className={`md:hidden fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="space-y-4 px-5 py-4">
          <Link href="/">
            <li className="cursor-pointer hover:text-blue-500 transition duration-300">Home</li>
          </Link>
          <Link href="/about">
            <li className="cursor-pointer hover:text-blue-500 transition duration-300">About</li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer hover:text-blue-500 transition duration-300">Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
