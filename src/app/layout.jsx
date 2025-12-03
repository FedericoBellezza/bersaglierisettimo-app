import "./globals.css";
import "../fontello-bersaglieri/css/fontello.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import CookieBanner from "@/components/CookieBanner";
import PosterOnOpen from "@/components/PosterOnOpen";

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
      <body className={`font-sans antialiased overflow-hidden max-w-screen`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
        <CookieBanner />
        <PosterOnOpen value={true} />
      </body>
    </html>
  );
}
