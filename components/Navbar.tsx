"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiOpensea } from "react-icons/si";

import Logo from "@/components/ui/Logo";

const navItems = [
  { name: "ABOUT", href: "/about" },
  { name: "GALLERY", href: "/gallery" },
  { name: "STAKE", href: "/stake" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  // Scroll detection for background + hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background change
      setScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-effect" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-bold transition-colors hover:text-rose-900 ${
                    pathname === item.href
                      ? "text-rose-800"
                      : "text-white/80"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Social */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="https://x.com/irukandjinfts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-white/80 hover:text-rose-900 transition-colors"
              >
                <FaSquareXTwitter className="w-5 h-5" />
              </Link>

              <Link
                href="https://discord.gg/q9DdaAGmDk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="text-white/80 hover:text-rose-900 transition-colors"
              >
                <FaDiscord className="w-5 h-5" />
              </Link>

              <Link
                href="https://opensea.io/collection/irukandji"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OpenSea"
                className="text-white/80 hover:text-rose-900 transition-colors"
              >
                <SiOpensea className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="md:hidden text-white/80 hover:text-white transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={toggleMenu}
            />

            <motion.div
              className="absolute top-0 right-0 w-64 h-full glass-effect"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
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
                      className={`block py-3 text-lg font-bold transition-colors hover:text-rose-800 ${
                        pathname === item.href
                          ? "text-rose-900"
                          : "text-white/80"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <div className="flex items-center space-x-4 mt-8">
                  <Link
                    href="https://x.com/irukandjinfts"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="text-white/80 hover:text-rose-900 transition-colors"
                  >
                    <FaSquareXTwitter className="w-6 h-6" />
                  </Link>

                  <Link
                    href="https://discord.gg/q9DdaAGmDk"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Discord"
                    className="text-white/80 hover:text-rose-900 transition-colors"
                  >
                    <FaDiscord className="w-6 h-6" />
                  </Link>

                  <Link
                    href="https://opensea.io/collection/irukandji"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="OpenSea"
                    className="text-white/80 hover:text-rose-900 transition-colors"
                  >
                    <SiOpensea className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}