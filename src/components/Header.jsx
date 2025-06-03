"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const menuItems = [
    { href: "#calendario", label: "Calendario" },
    { href: "#video", label: "Video" },
    { href: "#foto", label: "Foto" },
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
                <a
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm lg:text-base uppercase font-medium transition-colors relative group ${
                    isAtTop ? "text-white drop-shadow-lg" : "text-white"
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
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
            <a href="#contatti">CONTATTACI</a>
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
                          <a href="#contatti" onClick={() => setIsOpen(false)}>
                            CONTATTACI
                          </a>
                        </Button>
                      </motion.div>

                      {/* Mobile menu footer */}
                      <motion.div
                        variants={menuItemVariants}
                        className="mt-auto pt-12 pb-6 text-center text-sm text-white/70"
                      >
                        <div className="flex items-center justify-center mb-4 space-x-4">
                          {/* Social icons */}
                          {["facebook", "instagram", "youtube"].map(
                            (social, index) => (
                              <motion.a
                                key={social}
                                href={`#${social}`}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600/30 hover:bg-red-600/50 transition-colors"
                              >
                                <span className="sr-only">{social}</span>
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d={
                                      social === "facebook"
                                        ? "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        : social === "instagram"
                                        ? "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        : "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                    }
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </motion.a>
                            )
                          )}
                        </div>
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
