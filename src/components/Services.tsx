"use client";
import Image from "next/image";
import React from 'react';
import {motion} from 'framer-motion';

import bbb from '../assests/bbb.jpg';
import bathservice from '../assests/bathservice.jpg';
import realheat from '../assests/realheat.jpg';
import ppp from '../assests/ppp.jpg';

const projects = [
    {
        title: "Boiler Installation Project",
        desc: "From assessing the property's heating needs to selecting the right boiler, we handled everything with precision. We expertly removed the old system, installed the new unit, and tested it thoroughly for safety and performance. The result? A reliable heating system that provides consistent warmth and efficiency, leaving our client highly satisfied.",
        devStack:"HTML, CSS, Java",
        link: "#",
        git: "#",
        src: bbb
    },
    {
        title: "Bathroom Upgrade",
        desc: "We did a full bathroom renovation, transforming the space into a modern and functional retreat. We installed a sleek new shower, a high-quality toilet, and upgraded the plumbing system for optimal performance. Every detail, from efficient water flow to stylish fixtures, was carefully handled to ensure durability and comfort. The result? A beautifully upgraded bathroom that perfectly blends style and practicality, leaving our client thrilled with the outcome.",
        devStack:"HTML, Saas, Java",
        link: "#",
        git: "#",
        src: bathservice
    },
    {
        title: "Heater Installation",
        desc: "We recently completed a professional heater installation, ensuring a warm and energy-efficient home for our client. We carefully assessed the heating requirements, selected the ideal system, and expertly installed it for maximum performance. From precise fittings to safety checks, every step was handled with attention to detail. The result? A reliable and efficient heating system that keeps the home cozy, even in the coldest months, leaving our client completely satisfied.",
        devStack:"HTML, react, Nextjs",
        link: "#",
        git: "#",
        src: realheat
    },
    {
        title: "Plumbing Service",
        desc: "The team provided expert plumbing services, addressing issues and enhancing the system’s overall efficiency. We fixed leaks, upgraded pipes, and optimized water flow throughout the property. Every step, from identifying underlying problems to implementing durable solutions, was executed with precision and care. The outcome? A reliable, leak-free plumbing system that ensures smooth operation and complete peace of mind for our client.",
        devStack:"HTML, Rust, Mixtit",
        link: "#",
        git: "#",
        src: ppp
    }

]

const Services = () => {
  return (
    <div className="text-white mt-50 bg-gradient-to-b from-black to-[#381a5f] py-18" id="services">

        <h1 className="text-white relative text-6xl max-w-[320px] mx-auto font-semibold my-12">Our   
        <span className="text-orange-400">Projects</span></h1>

      <div className="px-6 md:px-0 max-w-[1100px] mx-auto mt-32 space-y-24">
        {projects.map((project, index) => (
            <motion.div key={index} 
            initial={{ opacity: 0, y: 75}} 
            whileInView={{opacity: 1, y: 0}} 
            viewport={{once: true}} 
            transition={{duration: 0.5, delay: 0.25}} className={`flex flex-col ${index % 2 === 1 ? "mt-12 md:flex-row-reverse gap-12" : "flex-col md:flex-row"}`}>
                <div className="space-y-2 max-w-[550px]">
                    <h2 className="text-7xl my-4 text-orange-400">{`0${index + 1}`}</h2>
                    <h2 className="text-4xl">{project.title}</h2>
                    <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                    {/* <p className="text-xl text-orange-400 font-semibold">{project.devStack}</p> */}
                    {/* <div className="w-64 h-[1px] bg-gray-400 my-4">
                        <a href={project.link} className="mr-6">Link</a>
                        <a href={project.git} className="mr-6">git</a>
                    </div> */}
                </div>
                <div className="flex justify-center items-center">
                    <Image src={project.src} alt={project.title} className="h-auto w-auto object-cover border rounded border-gray-700"/>
                </div>
            </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Services
