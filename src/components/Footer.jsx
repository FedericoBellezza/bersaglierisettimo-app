"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    {
      title: "Navigazione",
      links: [
        { name: "Home", href: "/" },
        { name: "Calendario", href: "/calendario" },
        { name: "Video", href: "/video" },
        { name: "Contatti", href: "/contatti" },
      ],
    },
    {
      title: "Legale",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Cookie Policy", href: "/cookie" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/fanfarasettimotorinese",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/fanfarasettimotorinese/",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      href: "https://www.youtube.com/channel/UC2GPnPlTq41cEUwWWnuozvA",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/logo-bersaglieri.svg"
                alt="Logo Fanfara Bersaglieri"
                className="h-12 mr-3"
              />
              <div>
                <h3 className="text-lg font-condensed font-bold text-yellow-400">
                  FANFARA BERSAGLIERI
                </h3>
                <p className="text-xs text-gray-400">SETTIMO TORINESE</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Dal 1995, portiamo la tradizione e la musica dei Bersaglieri in
              tutta Italia.
            </p>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-condensed font-bold text-lg mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Fanfara Bersaglieri Settimo Torinese.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
