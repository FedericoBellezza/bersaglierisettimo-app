import { getDb } from "@/lib/db";
import PhotoManager from "./PhotoManager";

export const dynamic = "force-dynamic";

export default async function FotoAdminPage() {
  const sql = getDb();
  const photos = await sql`SELECT * FROM photos ORDER BY created_at DESC`;
  return <PhotoManager initialPhotos={photos} />;
}
