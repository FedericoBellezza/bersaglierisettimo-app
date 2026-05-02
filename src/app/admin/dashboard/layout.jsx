import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyAdminToken } from "@/lib/auth";
import AdminNav from "./AdminNav";
import LogoutButton from "./LogoutButton";

export default async function DashboardLayout({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token || !(await verifyAdminToken(token))) {
    redirect("/admin");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎺</span>
            <span className="font-bold text-gray-900 text-sm hidden sm:block">Fanfara Admin</span>
          </div>
          <AdminNav />
        </div>
        <LogoutButton />
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
