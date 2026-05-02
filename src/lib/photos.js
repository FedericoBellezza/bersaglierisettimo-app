import { getDb } from './db';

export async function getPhotos() {
  const sql = getDb();
  return sql`SELECT * FROM photos ORDER BY created_at DESC`;
}
