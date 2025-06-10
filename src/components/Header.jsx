"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const menuItems = [
    { href: "/calendario", label: "Calendario" },
    { href: "/video", label: "Video" },
  ];

  useEffect(() => {
    // Handle scroll for navbar background change
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      setIsAtTop(window.scrollY <= 10);
    };

    // Handle window resize for responsive breakpoints
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial states
    handleResize();
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine if mobile view based on window width
  const isMobile = windowWidth < 768;

  // Animation variants for the sidebar
  const sidebarVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  // Animation variants for menu items
  const menuItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  // Animation variants for the backdrop
  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <motion.header
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        backgroundColor: scrolled ? "rgba(185, 28, 28, 1)" : "rgba(0,0,0,0)",
        boxShadow: scrolled
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          : "none",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 transition-all duration-300 max-w-screen"
    >
      <nav
        className={`container mx-auto flex justify-between items-center px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <a href="/" className="flex items-center gap-3 z-50">
          {/* Logo and brand name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/logo-bersaglieri.svg"
              className={`transition-all duration-300 ${
                scrolled ? "h-8 sm:h-10" : "h-10 sm:h-12"
              }`}
              alt="Logo Fanfara Bersaglieri"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: isMobile && isAtTop ? 0 : 1,
              x: isMobile && isAtTop ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="transition-all"
          >
            <div
              className={`font-extrabold tracking-tight transition-all duration-300 ${
                scrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
              }`}
            >
              <motion.span
                className="text-white"
                animate={{
                  textShadow:
                    isAtTop && !isMobile
                      ? "0px 1px 3px rgba(0,0,0,0.8)"
                      : "none",
                }}
              >
                FANFARA BERSAGLIERI
              </motion.span>
              <span className="block text-xs font-normal text-yellow-300 drop-shadow-md">
                SETTIMO TORINESE
              </span>
            </div>
          </motion.div>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
          <ul className="flex space-x-1 lg:space-x-6 items-center">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm lg:text-base uppercase font-medium transition-colors relative group ${
                    isAtTop ? "text-white drop-shadow-lg" : "text-white"
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
          <Button
            asChild
            variant="outline"
            className={`ml-2 text-sm lg:text-base border-white text-white hover:bg-yellow-300  hover:border-yellow-300 transition-all duration-300 ${
              scrolled ? "py-1.5" : "py-2"
            } ${isAtTop ? "bg-black/30 shadow-lg " : "text-black"}`}
          >
            <Link href="/contatti">CONTATTACI</Link>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
          {/* Custom Sheet implementation with Framer Motion */}
          <div>
            <Button
              variant="ghost"
              size="icon"
              className={`text-white hover:bg-white/20 transition-colors z-50 relative `}
              aria-label="Menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.svg
                    key="close"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-md"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-md"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </Button>

            {/* Animated Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <>
                  {/* Backdrop with click handler to close menu */}
                  <motion.div
                    className="fixed inset-0 bg-black/60 z-40"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={backdropVariants}
                    onClick={() => setIsOpen(false)}
                  />

                  {/* Sidebar content */}
                  <motion.div
                    className="fixed top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-gradient-to-bl from-red-700 to-red-900 text-white border-l border-red-900 shadow-xl z-50 overflow-hidden"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={sidebarVariants}
                  >
                    {/* Mobile header */}
                    <motion.div
                      className="px-6 py-5 border-b border-red-600/30 flex items-center justify-between"
                      variants={menuItemVariants}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src="/logo-bersaglieri.svg"
                          className="h-8"
                          alt="Logo Fanfara Bersaglieri"
                        />
                        <span className="text-lg font-bold">Menu</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-red-600/30"
                        onClick={() => setIsOpen(false)}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 6L6 18M6 6L18 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Button>
                    </motion.div>

                    {/* Menu items */}
                    <div className="px-6 py-6 flex flex-col">
                      {menuItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          variants={menuItemVariants}
                          custom={index}
                          className="overflow-hidden"
                        >
                          <a
                            href={item.href}
                            className="flex items-center py-4 text-xl font-medium uppercase hover:text-yellow-300 transition-colors border-b border-red-600/30"
                            onClick={() => setIsOpen(false)}
                          >
                            <motion.span
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                              className="flex items-center w-full"
                            >
                              {item.label}
                              <svg
                                className="ml-auto w-5 h-5 transition-transform duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </motion.span>
                          </a>
                        </motion.div>
                      ))}

                      <motion.div variants={menuItemVariants} className="mt-8">
                        <Button
                          asChild
                          className="w-full py-7 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg border-none shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Link
                            href="/contatti"
                            onClick={() => setIsOpen(false)}
                          >
                            CONTATTACI
                          </Link>
                        </Button>
                      </motion.div>

                      {/* Mobile menu footer */}
                      <motion.div
                        variants={menuItemVariants}
                        className="mt-auto pt-12 pb-6 text-center text-sm text-white/70"
                      >
                        <img
                          src="/logo-bersaglieri.svg"
                          className="h-10 mx-auto mb-3 opacity-50"
                          alt="Logo Fanfara Bersaglieri"
                        />
                        <p className="mb-1">© 2025 Fanfara Bersaglieri</p>
                        <p className="text-xs">Settimo Torinese</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
