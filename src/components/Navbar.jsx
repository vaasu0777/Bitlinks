"use client";
import { useState } from "react";
import { alexBrush } from "@/app/page";
import Link from "next/link";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky w-text top-0 z-50 w-full border-b border-white/10 bg-linear-to-br from-[#200122] to-[#6f0000] text-white">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <div id="logo" className="flex items-center space-x-2">
          <img
            src="/BitLinks.png"
            className="h-8 md:h-10 object-contain"
            alt="Logo"
          />
          <div className={`text-4xl font-bold ${alexBrush.className}`}>
            <span className="text-orange-500">&lt;Bit</span>
            <span className="text-blue-400">Links/&gt;</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto w-text`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-white/10 rounded-lg bg-[#240b36] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent items-center">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 hover:text-orange-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 hover:text-orange-400 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 hover:text-orange-400 transition"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="block py-2 px-3 hover:text-orange-400 transition"
              >
                Login
              </Link>
            </li>
            <li className="mt-4 md:mt-0">
              <Link
                href="https://github.com/vaasu0777/Bitlinks"
                target="_blank"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition border border-white/20"
              >
                <FaGithub size={18} />
                <span>Github</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
