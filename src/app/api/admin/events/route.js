import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getDb } from "@/lib/db";

export async function GET() {
  const sql = getDb();
  const events = await sql`SELECT * FROM events ORDER BY id ASC`;
  return NextResponse.json(events);
}

export async function POST(request) {
  const sql = getDb();
  const b = await request.json();

  const [event] = await sql`
    INSERT INTO events (title, date, month, year, location, description, image, type, start_time, end_time, locandina)
    VALUES (
      ${b.title}, ${b.date}, ${b.month}, ${b.year},
      ${b.location}, ${b.description}, ${b.image}, ${b.type},
      ${b.startTime}, ${b.endTime ?? null}, ${b.locandina ?? null}
    )
    RETURNING *
  `;

  revalidatePath("/");
  revalidatePath("/calendario");

  return NextResponse.json(event, { status: 201 });
}
