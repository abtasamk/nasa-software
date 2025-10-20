// import React from "react";
// import { motion } from "framer-motion";

// const Navbar = ({ onNavClick }) => {
//   const links = [
//     { label: "Services", id: "services" },
//     { label: "Industries", id: "industries" },
//     { label: "Case Studies", id: "casestudies" },
//     { label: "Clients", id: "clients" },
//     { label: "Our Team", id: "team" }, // ✅ New section
//     { label: "Contact", id: "contact" },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center"
//     >
//       {/* Logo */}
//       <h1 className="text-2xl font-bold text-red-600">ٱلنساء</h1>

//       {/* Navigation Links */}
//       <ul className="flex gap-6 text-gray-300">
//         {links.map((link) => (
//           <li
//             key={link.id}
//             onClick={() => onNavClick(link.id)}
//             className="cursor-pointer hover:text-red-500 transition-colors duration-200"
//           >
//             {link.label}
//           </li>
//         ))}
//       </ul>
//     </motion.nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreVertical, X } from "lucide-react"; // For 3 dots + close icon

const Navbar = ({ onNavClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Services", id: "services" },
    { label: "Industries", id: "industries" },
    { label: "Case Studies", id: "casestudies" },
    { label: "Clients", id: "clients" },
    { label: "Our Team", id: "team" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    onNavClick(id);
    setMenuOpen(false); // close on click (mobile)
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center"
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold text-red-600">ٱلنساء</h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 text-gray-300">
        {links.map((link) => (
          <li
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className="cursor-pointer hover:text-red-500 transition-colors duration-200"
          >
            {link.label}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-gray-300 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <MoreVertical size={24} />}
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 right-6 bg-zinc-900 text-white rounded-lg shadow-lg flex flex-col gap-3 py-4 px-6 md:hidden border border-zinc-700"
          >
            {links.map((link) => (
              <li
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="cursor-pointer hover:text-red-500 transition-colors duration-200"
              >
                {link.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
