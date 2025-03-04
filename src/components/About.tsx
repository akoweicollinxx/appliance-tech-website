"use client";
import Image from "next/image";
import React from 'react';
import pip from '../assests/pip.png';
import boiler from '../assests/boiler.png';
import bath from '../assests/bath.png';
import heater from '../assests/heater.png';


const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">

        <h1 className="text-white relative text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">About 
            <span className="text-orange-400">Us</span></h1>
            


        <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">

            <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20  rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                 <div className="flex flex-row p-6 place-items-center">
                    <Image src={pip} alt="book" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80 w-auto">Plumbing Repairing Services</h2>
                        <p className="text-lg text-white/70 mt-2"> We specialize in fast and reliable plumbing repairs, expert leak detection, and high-quality bathroom plumbing solutions. Whether it’s a water line repair or general maintenance, we ensure your home stays leak-free and running smoothly. </p>
                    </div>
                 </div>
            </div>


            <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20  rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                 <div className="flex flex-row p-6 place-items-center">
                    <Image src={boiler} alt="pc" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80 w-auto">Boiler installation</h2>
                        <p className="text-lg text-white/70 mt-2">We ensure customers get proper boiled water and no disturbance in daily routines. </p>
                    </div>
                 </div>
            </div>


            <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20  rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                 <div className="flex flex-row p-6 place-items-center">
                    <Image src={heater} alt="card" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80 w-auto">Heating Services</h2>
                        <p className="text-lg text-white/70 mt-2">We offer Heating services to private customers, local authorities and housing associations.</p>
                    </div>
                 </div>
            </div>


            <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20  rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                 <div className="flex flex-row p-6 place-items-center">
                    <Image src={bath} alt="finance" className="w-auto h-[130px]"/>
                    <div className="flex flex-col mt-4">
                        <h2 className="text-2xl font-bold text-white/80 w-auto">Bathroom Installation & Upgrade Services</h2>
                        <p className="text-lg text-white/70 mt-2">Our expert team specializes in toilet, bathroom sink and shower installations, and repairs. We ensure durability, modern design, and top performance. Transform your space into a stylish and functional retreat today.</p>
                    </div>
                 </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
