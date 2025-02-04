
"use client";
import { useState } from "react";
import Nav from "./Nav";

export default function WeeklyInventory() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ product: "", quantity: "", date: "" });

  const addEntry = () => {
    if (!newEntry.product || !newEntry.quantity || !newEntry.date) return;
    setEntries([...entries, { ...newEntry, quantity: Number(newEntry.quantity) }]);
    setNewEntry({ product: "", quantity: "", date: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 w-full">
      <Nav />
      <div className="flex flex-col items-center justify-center flex-1 p-1 w-full">
        <section className="bg-white rounded-lg shadow-lg p-1 w-full max-w-6xl">
          <h2 className="text-gray-800 font-semibold text-2xl mb-2 text-center">Agence de Port-Gentil</h2>
          <div className="flex flex-wrap items-center gap-4 mb-6 w-full">
            <select
              className="flex-1 border rounded-lg p-3"
              value={newEntry.product}
              onChange={(e) => setNewEntry({ ...newEntry, product: e.target.value })}
            >
              <option value="">Sélectionner un produit</option>
              <option value="Livre">Livre</option>
              <option value="Cahier">Cahier</option>
              <option value="Sacs">Sacs</option>
              <option value="Stylo">Stylo</option>
            </select>
            <input
              type="number"
              placeholder="Quantité"
              className="flex-1 border rounded-lg p-3"
              value={newEntry.quantity}
              onChange={(e) => setNewEntry({ ...newEntry, quantity: e.target.value })}
            />
            <input
              type="date"
              className="flex-1 border rounded-lg p-3"
              value={newEntry.date}
              onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
            />
            <button onClick={addEntry} className="bg-green-500 text-white rounded-lg px-6 py-3 font-semibold">
              Ajouter Entrée
            </button>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="w-full border-collapse border border-gray-300 shadow-md text-lg">
              <thead className="bg-gray-200">
                <tr>
                  {["Produit", "Stock Initial", "Entrées", "Sorties", "Stock Final", "Variation"].map((header, index) => (
                    <th key={index} className="border border-gray-300 px-6 py-4 text-left text-gray-700 font-bold text-xl">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-6 py-4">{entry.product}</td>
                    <td className="border border-gray-300 px-6 py-4">100</td>
                    <td className="border border-gray-300 px-6 py-4">{entry.quantity}</td>
                    <td className="border border-gray-300 px-6 py-4">-</td>
                    <td className="border border-gray-300 px-6 py-4">{100 + entry.quantity}</td>
                    <td className="border border-gray-300 px-6 py-4 text-green-600 font-bold">+{entry.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
