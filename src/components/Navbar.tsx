"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const navLinks = [
  { title: "Projects", path: "services" },
  { title: "About", path: "about" },
  { title: "Contact", path: "contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const scrollToSection = (id: string, event?: React.MouseEvent<HTMLDivElement>) => {
    if (event) {
      event.preventDefault();
      event.currentTarget.blur(); // Removes focus from clicked item
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeNav();
    }
  };

  const menuVariants = {
    open: { x: 0, transition: { stiffness: 20, damping: 15 } },
    closed: { x: "-100%", transition: { stiffness: 20, damping: 15 } },
  };

  return (
    <div className="text-white/70 pt-6">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
        <ul className="flex flex-row p-4 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <div
                onClick={(e) => scrollToSection(link.path, e)}
                className="text-lg font-medium cursor-pointer hover:text-white transition-all select-none"
                role="button"
                tabIndex={0}
              >
                {link.title}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div
        onClick={toggleNav}
        className="md:hidden absolute text-white/70 top-5 right-5 cursor-pointer border rounded border-white/70 p-2 z-50"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariants}
        className="fixed left-0 top-0 w-full h-full bg-black/90 z-40 flex items-center justify-center"
      >
        <ul className="text-4xl font-semibold text-center space-y-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <div
                onClick={(e) => scrollToSection(link.path, e)}
                className="text-white/70 hover:text-white cursor-pointer transition-all select-none"
                role="button"
                tabIndex={0}
              >
                {link.title}
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
