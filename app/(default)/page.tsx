"use client";

import { useEffect } from "react";
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import PopupModal from "@/components/PopupModal";

export default function Home() {
  useEffect(() => {
    AOS.init({duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  return (
   <motion.div
     initial={{ opacity:0 }}
     animate={{ opacity:1 }}
     transition={{ duration:0.5 }}
     className="min-h-screen bg-black">
    <div>
      <PopupModal />
      {/** <button className="absolute rounded-full bg-rose-600 px-4 py-2 text-sm font-medium text-gray-800 font-climate transition-colors hover:bg-rose-800 bottom-0 right-0 translate-x-[-50%]">Mint ⇀</button> */}
      <figure className="flex h-screen w-full justify-center items-center">
        <Image 
          src="/images/hero.png" 
          alt="Irukandji Logo"
          width={500}
          height={500}
          className="h-auto w-auto"
        />
      </figure>
    </div>
   </motion.div>
  );
}