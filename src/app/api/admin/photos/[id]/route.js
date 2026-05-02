import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getDb } from "@/lib/db";

export async function PUT(request, { params }) {
  const sql = getDb();
  const { id } = await params;
  const b = await request.json();

  const [photo] = await sql`
    UPDATE photos SET
      title    = ${b.title ?? null},
      url      = ${b.url},
      category = ${b.category ?? null}
    WHERE id = ${id}
    RETURNING *
  `;

  if (!photo) {
    return NextResponse.json({ error: "Foto non trovata" }, { status: 404 });
  }

  revalidatePath("/foto");

  return NextResponse.json(photo);
}

export async function DELETE(request, { params }) {
  const sql = getDb();
  const { id } = await params;

  await sql`DELETE FROM photos WHERE id = ${id}`;

  revalidatePath("/foto");

  return NextResponse.json({ ok: true });
}
