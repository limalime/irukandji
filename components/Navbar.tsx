"use client";

  import { useState, useEffect } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import Link from 'next/link';
  import { usePathname } from 'next/navigation';
  import { Menu, X } from 'lucide-react';
  import { FaDiscord, FaSpotify } from "react-icons/fa";
  import { FaSquareXTwitter } from "react-icons/fa6";
  import { SiOpensea } from "react-icons/si";
  import Logo from "@/components/ui/Logo";

  const navItems = [
    { name: 'ABOUT', href: '/about' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'STAKE', href: '/stake' },
    { name: 'VAULT', href: '/vault' },
    { name: 'SHOP', href: '/shop' },
  ];

  export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
      <div>
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'glass-effect' : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-1">
                <Logo/>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-bold transition-colors hover:text-rose-900 ${
                      pathname === item.href ? 'text-rose-800' : 'text-white/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  href="https://x.com/irukandjinfts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose/80 hover:text-rose-900 transition-colors"
                >
                  <FaSquareXTwitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://discord.gg/q9DdaAGmDk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose/80 hover:text-rose-900 transition-colors"
                >
                  <FaDiscord className="w-5 h-5" />
                </Link>
                <Link href="https://opensea.io/collection/irukandji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose/80 hover:text-rose-900 transition-colors" >
                  <SiOpensea className="w-5 h-5" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden text-white/80 hover:text-white transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          iruav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 md:hidden"
            >
              <div className="absolute inset-0 bg-black/50" onClick={toggleMenu} />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="absolute top-0 right-0 w-64 h-full glass-effect"
              >
                <div className="flex flex-col p-6 pt-20">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className={`block py-3 text-lg font-bold transition-colors hover:text-rose-800 ${
                          pathname === item.href ? 'text-rose-900' : 'text-white/80'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="flex items-center space-x-4 mt-8">
                    <Link
                      href="https://x.com/0xIrukandji"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-rose-900 transition-colors"
                    >
                      <FaSquareXTwitter className="w-6 h-6" />
                    </Link>
                    <Link
                      href="https://dc.gg/irukandji"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-rose-900 transition-colors"
                    >
                      <FaDiscord className="w-6 h-6" />
                    </Link>
                    <Link href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose/80 hover:text-rose-900 transition-colors" >
                      <FaSpotify className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
