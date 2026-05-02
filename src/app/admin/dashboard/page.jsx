import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyAdminToken } from "@/lib/auth";
import { getDb } from "@/lib/db";
import EventManager from "./EventManager";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token || !(await verifyAdminToken(token))) {
    redirect("/admin");
  }

  const sql = getDb();
  const events = await sql`SELECT * FROM events ORDER BY id ASC`;

  return <EventManager initialEvents={events} />;
}
