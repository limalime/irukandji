'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Tree from '@/public/images/tree.svg';
import Banner from '@/public/images/banner.webp';
import Iruma from '@/public/images/iruma.webp';

// FAQ Data
const faqData = [
  {
    question: "What is Irukandji?",
    answer: "Irukandji is a story-driven NFT universe set in the futuristic city of District A5. The project combines digital collectibles, worldbuilding, fashion culture, and community participation into an evolving narrative experience.",
  },
  {
    question: "Who is Iruma?",
    answer: "Iruma is the leader of the mysterious Irukandji organization and the main character of Chapter One.",
  },
  {
    question: "Why is only Iruma available in this collection?",
    answer: "The current collection represents the first chapter of the Irukandji universe. While Irukandji consists of four members — Iruma, Yumi, Kaneki, and Yuo — only Iruma has emerged at this stage of the story. The remaining members will be revealed in future phases.",
  },
  {
    question: "How many NFTs are in Chapter One?",
    answer: "The Genesis Collection consists of 2,222 unique Iruma NFTs, each representing a different variation of the character with unique traits.",
  },
  {
    question: "What blockchain is Irukandji built on?",
    answer: "Irukandji is built on Ethereum, enabling fast transactions, low fees, and seamless integration within the growing Ethereum ecosystem.",
  },
  {
    question: "Is Irukandji only an NFT project?",
    answer: "No. Irukandji is being developed as a long-term brand and universe. Our vision extends beyond digital collectibles into storytelling, fashion, merchandise, community experiences, and future creative initiatives.",
  },
  {
    question: "What benefits do holders get?",
    answer: "Holding an Iruma NFT grants access to the evolving Irukandji ecosystem, including future story developments, community activities, exclusive opportunities, and upcoming project phases.",
  },
  {
    question: "Do I need Web3 experience to join?",
    answer: "Not at all. Irukandji is designed to welcome both Web2 and Web3 audiences. Whether you're an NFT collector, fashion enthusiast, artist, or simply curious about the universe of District A5, you're welcome to join the community.",
  },
];

// Cyberpunk-style FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-16 px-4">
      {/* Section Title */}
      <div className="text-center mb-10">
        <div className="inline-block px-6 py-1.5 mb-3 border border-rose-500/80 rounded-full">
          <span className="font-primary text-xs tracking-[3px] text-rose-300">NEED ANSWERS?</span>
        </div>
        <h2 className="font-primary text-3xl md:text-4xl text-white tracking-tight">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="text-gray-300 mt-3 text-sm">Everything you need to know about Irukandji</p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-3">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`group border transition-all duration-300 overflow-hidden
                ${isOpen 
                  ? 'border-rose-500/70 bg-black/40' 
                  : 'border-white/10 bg-black/20 hover:border-white/20'}
                rounded-2xl`
              }
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className={`font-primary text-base md:text-lg pr-4 transition-colors
                  ${isOpen ? 'text-rose-400' : 'text-white group-hover:text-rose-300'}`}>
                  {faq.question}
                </span>
                
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300
                  ${isOpen 
                    ? 'border-rose-500 bg-rose-500/10 rotate-45' 
                    : 'border-white/30 group-hover:border-white/50'}`}>
                  <span className={`text-xl leading-none transition-transform duration-300 ${isOpen ? 'text-rose-400' : 'text-white/70'}`}>
                    +
                  </span>
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-300 text-sm md:text-[15px] leading-relaxed border-t border-white/10 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <p className="text-xs text-gray-400">Still have questions? Reach out on Discord or X.</p>
      </div>
    </div>
  );
}

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
      
      {/* Iruma Image */}
      <motion.div
        className="mb-8 mt-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-lg overflow-hidden shadow-2xl shadow-black hover:shadow-gray-300 max-w-[500px]">
          <Image 
            src={Iruma} 
            width={500} 
            height={300} 
            alt="Iruma"
            className="block w-full h-auto" 
          />
        </div>
      </motion.div>
      
      <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[90%] md:max-w-2xl"
        >
          <span className="font-primary text-lg block mb-2">DISTRICT A5</span>
          District A5 is a futuristic megacity built upon innovation, fashion, technology, and influence. Beneath its vibrant skyline lies a hidden conflict between powerful organizations, corrupt leaders, and forces originating beyond the stars.
Every street, district, and faction holds secrets waiting to be uncovered as the Irukandji story unfolds.
        </motion.p>
        
      {/* Banner Image */}
      <motion.div
        className="mb-8 mt-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-lg overflow-hidden shadow-2xl shadow-black hover:shadow-gray-300 max-w-[500px]">
          <Image 
            src={Banner} 
            width={500} 
            height={300} 
            alt="Irukandji Banner"
            className="block w-full h-auto" 
          />
        </div>
      </motion.div>

      {/* FAQ Section */}
      <FAQAccordion />

      <div className="flex pt-16 pb-12">
        <Image src={Tree} width={50} height={50} alt="Tree" />
      </div>
    </div>
  );
}