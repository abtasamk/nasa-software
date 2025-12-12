import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-center py-6 border-t border-zinc-800">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} ٱلنساء Software Provider. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
