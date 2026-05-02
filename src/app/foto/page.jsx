import { getPhotos } from "@/lib/photos";
import PhotoGallery from "./PhotoGallery";

export const revalidate = 300;

export const metadata = {
  title: "Galleria Foto — Fanfara Bersaglieri di Settimo Torinese",
  description: "Guarda le foto della Fanfara Bersaglieri di Settimo Torinese.",
};

export default async function FotoPage() {
  const photos = await getPhotos();
  return <PhotoGallery photos={photos} />;
}
