'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PopupModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('popupDismissed');
    if (!dismissed) setShow(true);
  }, []);

  const handleClose = () => {
    localStorage.setItem('popupDismissed', 'true');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        >
          <div className="relative max-w-sm w-full mx-auto bg-rose-700 rounded-xl shadow-lg p-6 text-gray-100/80">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white text-gray-800 font-bold flex items-center justify-center"
            >
              ✕
            </button>

            <Image
              src="/images/toast.png"
              width= "100"
              height= "100"
              alt="Lazy Constructor"
              className="w-44 mx-auto -mt-20 mb-4 pointer-events-none"
            />

            <p className="text-center text-xl font-inter font-bold leading-snug">
              🏗️🚧
              <br/>This website <br /> is under construction mate..
            </p>

            <div className="mt-6 flex justify-center">
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-gray-100 text-gray-800/90 font-inter font-bold shadow-2xl rounded-full hover:bg-gray-400 transition"
              >
                okay
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
