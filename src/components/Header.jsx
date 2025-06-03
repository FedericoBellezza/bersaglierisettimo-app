"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#calendario", label: "calendario" },
    { href: "#video", label: "video" },
    { href: "#foto", label: "foto" },
  ];

  return (
    <header className="bg-gradient-to-bl from-red-600 to-red-800 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-5">
        <a href="/" className="flex gap-2 cursor-pointer items-center">
          <div>
            <img
              src="/logo-bersaglieri.svg"
              className="h-10 fill-yellow-300"
              alt="Logo Fanfara Bersaglieri"
            />
          </div>
          <div>
            <div className="text-2xl font-extrabold tracking-tight">
              FANFARA BERSAGLIERI
              <span className="block text-xs font-normal text-yellow-300">
                SETTIMO TORINESE
              </span>
            </div>
          </div>
        </a>

        {/* Menu per schermi grandi */}
        <ul className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-yellow-300 transition-colors font-medium pb-1 border-b-2 border-transparent hover:border-yellow-300"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Button
              asChild
              variant="outline"
              className="border-white text-slate-800 hover:bg-yellow-300 hover:border-yellow-400 transition-all duration-300 shadow-xl"
            >
              <a href="#contatti">contattaci</a>
            </Button>
          </li>
        </ul>

        {/* Menu mobile con Sheet di shadcn */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-red-700"
              >
                <svg
                  className="h-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-red-800 text-white border-red-700">
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:text-yellow-300 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  asChild
                  variant="outline"
                  className="mt-4 border-white text-white hover:text-slate-800 hover:bg-yellow-400 hover:border-yellow-400"
                >
                  <a href="#contatti" onClick={() => setIsOpen(false)}>
                    contattaci
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
