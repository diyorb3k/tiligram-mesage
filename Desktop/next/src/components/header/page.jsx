"use client";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto px-5 flex justify-between items-center">
      <ul className="flex gap-4">
        <Link href="/">
          <li className="cursor-pointer hover:text-blue-500">Hom</li>
        </Link>
        <Link href="/about">
          <li className="cursor-pointer hover:text-blue-500">About</li>
        </Link>
        <Link href="/contact">
          <li className="cursor-pointer hover:text-blue-500">Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
