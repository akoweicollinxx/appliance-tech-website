"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

import p1 from "../assests/p1.jpg";
import p2 from "../assests/p2.jpg";
import p3 from "../assests/p3.jpg";

const testimonials = [
  {
    name: "Jake Lowe",
    role: "CEO, BuildSmart Ltd.",
    text: "This Company exceeded our expectations. Their attention to detail and commitment to quality were outstanding!&quot;", // Fixed the unescaped quote
    src: p2,
  },
  {
    name: "Sarah Adams",
    role: "Project Manager, GreenTech",
    text: "The best construction team we've worked with! Highly professional and efficient.",
    src: p1,
  },
  {
    name: "Michael Lee",
    role: "Homeowner",
    text: "They transformed my home beautifully! Highly recommended for any renovation projects.",
    src: p3,
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-8">
      <h1 className="text-white relative text-6xl max-w-[320px] mx-auto font-semibold my-12">
        <span className="text-orange-400">Testimonial</span>
      </h1>
      <div className="relative w-full max-w-2xl mx-auto p-6">
        {/* Testimonial Card */}
        <div className="relative bg-white shadow-lg rounded-2xl p-6 text-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <Image
                src={testimonials[index].src}
                alt={testimonials[index].name}
                className="w-20 h-20 rounded-full object-cover border-4 border-gray-200"
              />
              <p className="mt-4 text-lg text-gray-700 italic">"{testimonials[index].text}"</p>
              <h3 className="mt-4 font-semibold text-gray-900">{testimonials[index].name}</h3>
              <span className="text-sm text-gray-500">{testimonials[index].role}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-orange-400 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-400 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
        >
          <FiChevronRight size={24} />
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition-all ${
                i === index ? "bg-orange-400" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
