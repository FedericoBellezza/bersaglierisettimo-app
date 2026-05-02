"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";
import PosterOnOpen from "./PosterOnOpen";

export default function ConditionalShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Header />}
      {children}
      {!isAdmin && <Footer />}
      {!isAdmin && <CookieBanner />}
      {!isAdmin && <PosterOnOpen value={true} />}
    </>
  );
}
