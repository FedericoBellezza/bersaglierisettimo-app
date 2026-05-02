import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getDb } from "@/lib/db";

export async function PUT(request, { params }) {
  const sql = getDb();
  const { id } = await params;
  const b = await request.json();

  const [event] = await sql`
    UPDATE events SET
      title       = ${b.title},
      date        = ${b.date},
      month       = ${b.month},
      year        = ${b.year},
      location    = ${b.location},
      description = ${b.description},
      image       = ${b.image},
      type        = ${b.type},
      start_time  = ${b.startTime},
      end_time    = ${b.endTime ?? null},
      locandina   = ${b.locandina ?? null}
    WHERE id = ${id}
    RETURNING *
  `;

  if (!event) {
    return NextResponse.json({ error: "Evento non trovato" }, { status: 404 });
  }

  revalidatePath("/");
  revalidatePath("/calendario");

  return NextResponse.json(event);
}

export async function DELETE(request, { params }) {
  const sql = getDb();
  const { id } = await params;

  await sql`DELETE FROM events WHERE id = ${id}`;

  revalidatePath("/");
  revalidatePath("/calendario");

  return NextResponse.json({ ok: true });
}
