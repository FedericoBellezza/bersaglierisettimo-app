import { getDb } from "@/lib/db";
import EventManager from "./EventManager";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const sql = getDb();
  const events = await sql`SELECT * FROM events ORDER BY id ASC`;
  return <EventManager initialEvents={events} />;
}
