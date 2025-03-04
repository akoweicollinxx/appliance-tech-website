// src/components/ScrollToTopButton.tsx

"use client";
import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi"; // Arrow icon for the button

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true); // Show the button after 100px scroll
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-orange-400 text-white shadow-lg hover:bg-orange-500 transition-all"
        >
          <FiArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
