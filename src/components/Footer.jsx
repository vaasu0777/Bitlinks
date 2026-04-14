import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 text-xl left-0 z-20 w-full p-4 bg-black border-t border-gray-800 md:flex md:items-center md:justify-between md:p-6">
      <div className="max-w-7xl w-text mx-auto w-full flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Copyright */}
        <span className="text-gray-400 sm:text-center">
          © 2026{" "}
          <a
            target="_blank"
            href="https://password-manager-y140.onrender.com/"
            className="hover:underline"
          >
            BitLinks™
          </a>
          . All Rights Reserved.
        </span>

        {/* Right Side: Credits */}
        <div className="flex items-center gap-0 mt-3 font-medium text-white md:mt-0">
          <p>
            Created with 🔥 by <span className="font-bold">Vaasu Gagneja</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
