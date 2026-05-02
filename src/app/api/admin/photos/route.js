import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getDb } from "@/lib/db";

export async function GET() {
  const sql = getDb();
  const photos = await sql`SELECT * FROM photos ORDER BY created_at DESC`;
  return NextResponse.json(photos);
}

export async function POST(request) {
  const sql = getDb();
  const b = await request.json();

  const [photo] = await sql`
    INSERT INTO photos (title, url, category)
    VALUES (${b.title ?? null}, ${b.url}, ${b.category ?? null})
    RETURNING *
  `;

  revalidatePath("/foto");

  return NextResponse.json(photo, { status: 201 });
}
