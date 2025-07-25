import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import "../fontello-bersaglieri/css/fontello.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-condensed",
});

export const metadata = {
  title: "Fanfara Bersaglieri di Settimo Torinese",
  description:
    "Sito ufficiale della Fanfara dei Bersaglieri di Settimo Torinese. Scopri la nostra storia, i prossimi eventi e come unirti a noi.",
  keywords:
    "Fanfara, Bersaglieri, Settimo Torinese, musica, banda, eventi, concerti",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${robotoCondensed.variable} font-sans antialiased overflow-hidden max-w-screen`}
      >
        <Header />
        {children}
        <Analytics />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
