'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import Tree from '@/public/images/tree.svg';
import Banner from '@/public/images/banner.png';

export default function AboutPage() {
  return (
    <div className="min-h-screen w-screen bg-black/85 pt-28 flex flex-col items-center px-4">
      <motion.h1
        className="text-5xl text-center font-primary text-gray-100 text-center mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ABOUT
      </motion.h1>
      
      <motion.div
        className="text-5xl text-center font-primary text-gray-100 text-center mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image className="flex justify-center content-center shadow-2xl "
        src={Banner}
        width={500}
        height={500}
        alt="Digikami Banner"
        />
      </motion.div>

      <motion.p
        className="text-justify text-gray-200/60 text-sm max-w-[90%] md:max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Irukandji is Community-driven and a brand-centered NFT project on HyperEVM built with innovation, creativity, and groundbreaking ideas. Our mission is to bridge the gap between Web2 and Web3 and create a vibrant, inclusive experience within the HyperEVM ecosystem.
        
        <p>With an in house team for manufacturing of our merchandise we will be working on our phases. Our vision is to cultivate a passionate community of creators and collectors who share a love for art, fashion, and self-expression. These high-quality garments will not only showcase unique art but also create a sense of belonging among.</p>
      </motion.p>
      <div className="flex pt-8 content-center">
        <Image className="justify-center content-center"
        src={Tree}
        width={50}
        height={50}
        alt="Tree"
        />
      </div>
    </div>
  )
}
