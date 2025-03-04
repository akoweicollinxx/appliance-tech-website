import Link from 'next/link';
import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
      <h1 className='text-2xl font-bold'>Company Name</h1>
      <div>
      © 2025 Company Name.
        <Link href="https://ceala.co.uk/" className="text-blue-500">
          Ceala Digital Media
        </Link>
      </div>
      <div className='flex space-x-6 mt-4'>
        <a href="#" className='hover:text-gray-300'>
            <FaFacebook size={24} />
        </a>
        <a href="#" className='hover:text-gray-300'>
            <FaInstagram size={24} />
        </a>
        <a href="#" className='hover:text-gray-300'>
            <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  )
}

export default Footer
