import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signAdminToken } from "@/lib/auth";

export async function POST(request) {
  const { password } = await request.json();

  const valid = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
  if (!valid) {
    return NextResponse.json({ error: "Password errata" }, { status: 401 });
  }

  const token = await signAdminToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
