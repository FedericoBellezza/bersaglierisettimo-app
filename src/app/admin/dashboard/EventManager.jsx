"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const MESI = [
  "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
  "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre",
];

const TIPI = ["Concerto", "Raduno", "Sfilata", "Serata musicale", "Altro"];

const INPUT_CLASS =
  "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent";

function dateToItalian(iso) {
  if (!iso) return { date: "", month: "", year: "" };
  const [year, month, day] = iso.split("-");
  const monthName = MESI[parseInt(month) - 1];
  return { date: `${parseInt(day)} ${monthName} ${year}`, month: monthName, year };
}

function italianToIso(str) {
  if (!str) return "";
  const parts = str.trim().split(" ");
  if (parts.length !== 3) return "";
  const [day, monthName, year] = parts;
  const idx = MESI.indexOf(monthName);
  if (idx === -1) return "";
  return `${year}-${String(idx + 1).padStart(2, "0")}-${String(parseInt(day)).padStart(2, "0")}`;
}

const EMPTY_FORM = {
  title: "", dateInput: "", location: "", description: "",
  image: "", type: "", startTime: "", endTime: "", locandina: "",
};

function eventToForm(ev) {
  return {
    title: ev.title ?? "",
    dateInput: italianToIso(ev.date),
    location: ev.location ?? "",
    description: ev.description ?? "",
    image: ev.image ?? "",
    type: ev.type ?? "",
    startTime: ev.start_time ?? ev.startTime ?? "",
    endTime: ev.end_time ?? ev.endTime ?? "",
    locandina: ev.locandina ?? "",
  };
}

function formToPayload(form) {
  const { date, month, year } = dateToItalian(form.dateInput);
  return {
    title: form.title, date, month, year,
    location: form.location, description: form.description,
    image: form.image, type: form.type,
    startTime: form.startTime,
    endTime: form.endTime || null,
    locandina: form.locandina || null,
  };
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {children}
    </div>
  );
}

export default function EventManager({ initialEvents }) {
  const [events, setEvents] = useState(initialEvents);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function f(key) {
    return (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }

  function openAdd() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setError("");
    setModalOpen(true);
  }

  function openEdit(ev) {
    setEditingId(ev.id);
    setForm(eventToForm(ev));
    setError("");
    setModalOpen(true);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setError("");
    const payload = formToPayload(form);

    try {
      const res = editingId
        ? await fetch(`/api/admin/events/${editingId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        : await fetch("/api/admin/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

      if (!res.ok) throw new Error("Errore nel salvataggio");
      const saved = await res.json();

      setEvents((prev) =>
        editingId ? prev.map((ev) => (ev.id === editingId ? saved : ev)) : [...prev, saved]
      );
      setModalOpen(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    const res = await fetch(`/api/admin/events/${id}`, { method: "DELETE" });
    if (res.ok) setEvents((prev) => prev.filter((ev) => ev.id !== id));
    setConfirmDeleteId(null);
  }

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-500">
          {events.length} {events.length === 1 ? "evento" : "eventi"}
        </p>
        <Button onClick={openAdd} className="bg-red-600 hover:bg-red-500 text-white">
          + Nuovo Evento
        </Button>
      </div>

      <div className="space-y-3">
        {events.map((ev) => (
          <div
            key={ev.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex gap-4 items-center"
          >
            {ev.image && (
              <img
                src={`/${ev.image}`}
                alt={ev.title}
                className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
              />
            )}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 truncate">{ev.title}</h3>
              <p className="text-sm text-gray-500 mt-0.5">
                {ev.date} · {ev.location}
              </p>
              <span className="inline-block mt-1 text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">
                {ev.type}
              </span>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Button size="sm" variant="outline" onClick={() => openEdit(ev)}>
                Modifica
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-red-600 border-red-200 hover:bg-red-50"
                onClick={() => setConfirmDeleteId(ev.id)}
              >
                Elimina
              </Button>
            </div>
          </div>
        ))}

        {events.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">Nessun evento presente.</p>
            <p className="text-sm mt-1">Crea il primo evento con il pulsante in alto.</p>
          </div>
        )}
      </div>

      {/* Modal aggiungi/modifica */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingId ? "Modifica Evento" : "Nuovo Evento"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="space-y-4 mt-3">
            <Field label="Titolo *">
              <input value={form.title} onChange={f("title")} className={INPUT_CLASS} required />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Data *">
                <input type="date" value={form.dateInput} onChange={f("dateInput")} className={INPUT_CLASS} required />
              </Field>
              <Field label="Tipo">
                <input value={form.type} onChange={f("type")} list="tipi-list" className={INPUT_CLASS} placeholder="es. Concerto" />
                <datalist id="tipi-list">
                  {TIPI.map((t) => <option key={t} value={t} />)}
                </datalist>
              </Field>
            </div>
            <Field label="Luogo">
              <input value={form.location} onChange={f("location")} className={INPUT_CLASS} />
            </Field>
            <Field label="Descrizione">
              <textarea value={form.description} onChange={f("description")} rows={3} className={`${INPUT_CLASS} resize-none`} />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Ora inizio">
                <input type="time" value={form.startTime} onChange={f("startTime")} className={INPUT_CLASS} />
              </Field>
              <Field label="Ora fine (opzionale)">
                <input type="time" value={form.endTime} onChange={f("endTime")} className={INPUT_CLASS} />
              </Field>
            </div>
            <Field label="Immagine (nome file, es. hero-image.avif)">
              <input value={form.image} onChange={f("image")} className={INPUT_CLASS} placeholder="hero-image.avif" />
            </Field>
            <Field label="Locandina (nome file, opzionale)">
              <input value={form.locandina} onChange={f("locandina")} className={INPUT_CLASS} placeholder="locandina.jpg" />
            </Field>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <div className="flex gap-3 pt-1">
              <Button type="submit" disabled={saving} className="flex-1 bg-red-600 hover:bg-red-500 text-white">
                {saving ? "Salvataggio..." : editingId ? "Salva modifiche" : "Crea evento"}
              </Button>
              <Button type="button" variant="outline" onClick={() => setModalOpen(false)}>
                Annulla
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Modal conferma eliminazione */}
      <Dialog open={!!confirmDeleteId} onOpenChange={() => setConfirmDeleteId(null)}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Conferma eliminazione</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600 mt-2">
            Sei sicuro di voler eliminare questo evento? L&apos;operazione non può essere annullata.
          </p>
          <div className="flex gap-3 mt-4">
            <Button className="flex-1 bg-red-600 hover:bg-red-500 text-white" onClick={() => handleDelete(confirmDeleteId)}>
              Elimina
            </Button>
            <Button variant="outline" className="flex-1" onClick={() => setConfirmDeleteId(null)}>
              Annulla
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
