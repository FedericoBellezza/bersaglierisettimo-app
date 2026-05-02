import "./globals.css";
import "../fontello-bersaglieri/css/fontello.css";
import { Analytics } from "@vercel/analytics/next";
import ConditionalShell from "@/components/ConditionalShell";

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
        <ConditionalShell>
          {children}
        </ConditionalShell>
        <Analytics />
      </body>
    </html>
  );
}
