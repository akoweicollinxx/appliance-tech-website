"use client";
import Image from "next/image";
import cursor from '../assests/icon1.png';
import lightning from '../assests/icon2.png';
import {motion} from "framer-motion";
import plumber from '../assests/plumber.png';


const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
        <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]">

        </div>

        <div className="relative">
            <div className="text-5xl font-bold text-center">
                <h1 className="text-[#98B4CE]">Keep your boiler in top shape </h1>
                <h1 className="text-[#E48A57]">and your home toasty warm!</h1>
            </div>

            <motion.div className="hidden md:block absolute left-[220px] top-[170px]" drag>
                <Image src={cursor} height="190" width="190" alt="cursor" className="" draggable="false"/>
            </motion.div>

            <motion.div className="hidden md:block absolute right-[220px] top-[170px]" drag>
                <Image src={lightning} height="120" width="120" alt="cursor" className="" draggable="false"/>
            </motion.div>

        

        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
        Our expert plumbing and heating services ensure your boiler runs smoothly, your pipes stay leak-free, and your heating works efficiently all year round. From emergency repairs to routine maintenance, we’ve got you covered. Stay cozy and stress-free—book your service today
        </p>
        <Image src={plumber} alt="profile picture" className="h-auto w-auto mx-auto"/>
        <div className="mt-5 absolute bottom-0 left-0 w-full h-1/18 bg-gradient-to-t from-black/50 via-white/10 to-transparent backdrop-blur-md"></div>
     </div>  

    </div>
  )
}

export default Hero
