"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { motion } from "framer-motion";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { href: "/calendario", label: "Calendario" },
    { href: "/video", label: "Video" },
    { href: "/contatti", label: "Contatti" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 w-full z-50 transition-all duration-300"
      initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      animate={{
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(0, 0, 0, 0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
        boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo-bersaglieri.svg"
            className="h-10 sm:h-12"
            alt="Logo Fanfara Bersaglieri"
          />
          <div className="font-condensed font-bold tracking-tight">
            <span
              className={`transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              FANFARA BERSAGLIERI
            </span>
            <span
              className={`block text-xs font-normal transition-colors ${
                scrolled ? "text-red-600" : "text-yellow-400"
              }`}
            >
              SETTIMO TORINESE
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-red-600 ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          {/* <Button asChild size="sm">
            <Link href="/#vieni-a-suonare">Suona con noi</Link>
          </Button> */}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={scrolled ? "text-gray-800" : "text-white"}
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <motion.div
                className="flex flex-col gap-6 pt-10 h-full"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium px-5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                {/* <div className="mt-auto px-5 pb-10">
                  <Button asChild className="w-full">
                    <Link
                      href="/#vieni-a-suonare"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Suona con noi
                    </Link>
                  </Button>
                </div> */}
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
