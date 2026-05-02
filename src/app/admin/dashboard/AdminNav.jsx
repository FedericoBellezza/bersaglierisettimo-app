"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/admin/dashboard", label: "Eventi" },
  { href: "/admin/dashboard/foto", label: "Foto" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <div className="flex gap-1">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={cn(
            "px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
            pathname === tab.href
              ? "bg-red-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          )}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
