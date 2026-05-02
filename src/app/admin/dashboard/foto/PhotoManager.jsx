"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

const INPUT_CLASS =
  "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent";

const EMPTY_FORM = { title: "", url: "", category: "" };

function photoToForm(p) {
  return { title: p.title ?? "", url: p.url ?? "", category: p.category ?? "" };
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {children}
    </div>
  );
}

export default function PhotoManager({ initialPhotos }) {
  const [photos, setPhotos] = useState(initialPhotos);
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

  function openEdit(p) {
    setEditingId(p.id);
    setForm(photoToForm(p));
    setError("");
    setModalOpen(true);
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      title: form.title || null,
      url: form.url,
      category: form.category || null,
    };

    try {
      const res = editingId
        ? await fetch(`/api/admin/photos/${editingId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        : await fetch("/api/admin/photos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

      if (!res.ok) throw new Error("Errore nel salvataggio");
      const saved = await res.json();

      setPhotos((prev) =>
        editingId ? prev.map((p) => (p.id === editingId ? saved : p)) : [saved, ...prev]
      );
      setModalOpen(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id) {
    const res = await fetch(`/api/admin/photos/${id}`, { method: "DELETE" });
    if (res.ok) setPhotos((prev) => prev.filter((p) => p.id !== id));
    setConfirmDeleteId(null);
  }

  const categories = [...new Set(photos.map((p) => p.category).filter(Boolean))];

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-500">
          {photos.length} {photos.length === 1 ? "foto" : "foto"}
        </p>
        <Button onClick={openAdd} className="bg-red-600 hover:bg-red-500 text-white">
          + Nuova Foto
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {photos.map((p) => (
          <div key={p.id} className="group relative rounded-xl overflow-hidden shadow-sm bg-gray-200 aspect-square">
            <img
              src={p.url}
              alt={p.title ?? ""}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => { e.target.style.display = "none"; }}
            />

            {/* gradient + titolo bottom */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pt-8 pb-2 px-2.5 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
              {p.title && (
                <p className="text-white text-xs font-medium truncate">{p.title}</p>
              )}
              {p.category && (
                <p className="text-gray-300 text-xs truncate">{p.category}</p>
              )}
            </div>

            {/* icone azione top-right */}
            <div className="absolute top-2 right-2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button
                onClick={() => openEdit(p)}
                className="p-1.5 rounded-lg bg-white/90 hover:bg-white text-gray-700 shadow-sm transition-colors"
                title="Modifica"
              >
                <PencilSquareIcon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setConfirmDeleteId(p.id)}
                className="p-1.5 rounded-lg bg-white/90 hover:bg-red-600 hover:text-white text-gray-700 shadow-sm transition-colors"
                title="Elimina"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {photos.length === 0 && (
          <div className="col-span-full text-center py-20 text-gray-400">
            <p className="text-lg">Nessuna foto presente.</p>
            <p className="text-sm mt-1">Aggiungi la prima foto con il pulsante in alto.</p>
          </div>
        )}
      </div>

      {/* Modal aggiungi/modifica */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editingId ? "Modifica Foto" : "Nuova Foto"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="space-y-4 mt-3">
            <Field label="URL foto *">
              <input
                value={form.url}
                onChange={f("url")}
                className={INPUT_CLASS}
                placeholder="https://... oppure /nome-file.jpg"
                required
              />
            </Field>
            {form.url && (
              <div className="rounded-lg overflow-hidden border border-gray-200 aspect-video bg-gray-50">
                <img src={form.url} alt="Anteprima" className="w-full h-full object-contain" />
              </div>
            )}
            <Field label="Titolo (opzionale)">
              <input value={form.title} onChange={f("title")} className={INPUT_CLASS} placeholder="es. Concerto estate 2024" />
            </Field>
            <Field label="Categoria (opzionale)">
              <input
                value={form.category}
                onChange={f("category")}
                list="cat-list"
                className={INPUT_CLASS}
                placeholder="es. Concerti"
              />
              <datalist id="cat-list">
                {categories.map((c) => <option key={c} value={c} />)}
              </datalist>
            </Field>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <div className="flex gap-3 pt-1">
              <Button type="submit" disabled={saving} className="flex-1 bg-red-600 hover:bg-red-500 text-white">
                {saving ? "Salvataggio..." : editingId ? "Salva modifiche" : "Aggiungi foto"}
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
            Sei sicuro di voler eliminare questa foto? L&apos;operazione non può essere annullata.
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
