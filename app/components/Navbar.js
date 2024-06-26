"use client";

import Link from 'next/link';
import { ConnectKitButton } from 'connectkit';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gone p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <img
            src="/goneffle.svg"
            alt="Goneffle Logo"
            className="w-12 h-12 mr-2"
          />
        </Link>
        <span className="font-semibold text-xl tracking-tight">Goneffle</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gone-light border-gone-light hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-gone-light hover:text-white mr-4"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-gone-light hover:text-white mr-4"
          >
            About
          </Link>
          <Link
            href="/raffle"
            className="block mt-4 lg:inline-block lg:mt-0 text-gone-light hover:text-white mr-4"
          >
            Raffle
          </Link>
        </div>
        <div>
          <ConnectKitButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;