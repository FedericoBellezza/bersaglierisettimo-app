import { getDb } from './db';

export async function getEvents() {
  const sql = getDb();
  const rows = await sql`SELECT * FROM events ORDER BY id ASC`;
  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    date: r.date,
    month: r.month,
    year: r.year,
    location: r.location,
    description: r.description,
    image: r.image,
    type: r.type,
    startTime: r.start_time,
    endTime: r.end_time,
    locandina: r.locandina,
  }));
}
