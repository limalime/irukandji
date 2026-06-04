'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import Tree from '@/public/images/tree.svg';
import Banner from '@/public/images/banner.webp';
import Iruma from '@/public/images/iruma.webp';
import { CyberpunkCard } from '@/components/CyberpunkCardProps';

export default function AboutPage() {
  return (
    <div className="min-h-screen w-screen pt-28 flex flex-col items-center px-4">
      <motion.h1
        className="text-5xl text-center font-primary text-gray-100 mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ABOUT
      </motion.h1>

      <div className="max-w-[90%] md:max-w-2xl space-y-5 text-gray-100 text-sm md:text-base leading-relaxed">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-primary text-lg block mb-2">WHAT IS IRUKANDJI?</span>
          Irukandji is a story-driven NFT universe set in the futuristic world of District A5.
What begins with Iruma's quest for truth and revenge will evolve into a larger narrative involving hidden conspiracies, alien forces, fashion culture, and a growing community shaping the future of the Irukandji universe.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-primary text-lg block mb-2">THE ORIGIN OF IRUKANDJI</span>
          District A5 was once the brightest city in the known world. A sprawling metropolis of neon towers, advanced technology, and limitless creativity — where fashion became identity and influence shaped reality.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Beneath its dazzling skyline, however, corruption quietly spread through the city's highest ranks. Few knew the truth. Fewer survived it.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Among the shadows emerged a mysterious group known only as <span className="font-semibold">Irukandji</span> — four individuals bound by fate. Their names would eventually become legend: <span className="font-semibold">Iruma, Yumi, Kaneki, and Yuo</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          But every legend begins with tragedy. Iruma’s life changed forever when his mother disappeared after falling into debt controlled by a powerful figure known as Zen — secretly an extraterrestrial being hiding behind a human face.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          From that day forward, Iruma swore an oath — to avenge his mother, expose the truth, and save District A5 before it falls completely under alien control.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="pt-2"
        >
          Today, the first chapter begins. Of the four members of Irukandji, only Iruma has stepped forward. The others remain hidden — waiting, watching, and preparing for what comes next.
        </motion.p>

      </div>
      
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="pt-6">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <Image 
      src={Iruma} 
      width={500} 
      height={300} 
      alt="Iruma"
      className="block w-full h-auto" />
          </div>
        </div>
      </motion.div>
      
      <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-primary text-lg block mb-2">DISTRICT A5</span>
          District A5 is a futuristic megacity built upon innovation, fashion, technology, and influence. Beneath its vibrant skyline lies a hidden conflict between powerful organizations, corrupt leaders, and forces originating beyond the stars.
Every street, district, and faction holds secrets waiting to be uncovered as the Irukandji story unfolds.
        </motion.p>
        
        <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
          <div className="pt-6">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image 
      src={Banner} 
      width={500} 
      height={300} 
      alt="Irukandji Banner"
      className="block w-full h-auto" />
            </div>
          </div>
      </motion.div>

      <div className="flex pt-16 pb-10">
        <Image src={Tree} width={50} height={50} alt="Tree" />
      </div>
    </div>
  );
}