import CalendarioCompleto from "@/components/CalendarioCompleto";
import { getEvents } from "@/lib/events";

export const revalidate = 300;

export default async function Calendario() {
  const events = await getEvents();
  return <CalendarioCompleto events={events} />;
}
