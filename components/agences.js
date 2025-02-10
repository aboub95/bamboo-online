
// "use client";
// import { useState } from "react";
// import Nav from "./Nav";

// export default function WeeklyInventory() {
//   const [entries, setEntries] = useState([]);
//   const [newEntry, setNewEntry] = useState({ product: "", quantity: "", date: "" });

//   const addEntry = () => {
//     if (!newEntry.product || !newEntry.quantity || !newEntry.date) return;
//     setEntries([...entries, { ...newEntry, quantity: Number(newEntry.quantity) }]);
//     setNewEntry({ product: "", quantity: "", date: "" });
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100 w-full">
//       <Nav />
//       <div className="flex flex-col items-center justify-center flex-1 p-1 w-full">
//         <section className="bg-white rounded-lg shadow-lg p-1 w-full max-w-6xl">
//           <h2 className="text-gray-800 font-semibold text-2xl mb-2 text-center">Agence de Port-Gentil</h2>
//           <div className="flex flex-wrap items-center gap-4 mb-6 w-full">
//             <select
//               className="flex-1 border rounded-lg p-3"
//               value={newEntry.product}
//               onChange={(e) => setNewEntry({ ...newEntry, product: e.target.value })}
//             >
//               <option value="">Sélectionner un produit</option>
//               <option value="Livre">Livre</option>
//               <option value="Cahier">Cahier</option>
//               <option value="Sacs">Sacs</option>
//               <option value="Stylo">Stylo</option>
//             </select>
//             <input
//               type="number"
//               placeholder="Quantité"
//               className="flex-1 border rounded-lg p-3"
//               value={newEntry.quantity}
//               onChange={(e) => setNewEntry({ ...newEntry, quantity: e.target.value })}
//             />
//             <input
//               type="date"
//               className="flex-1 border rounded-lg p-3"
//               value={newEntry.date}
//               onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
//             />
//             <button onClick={addEntry} className="bg-green-500 text-white rounded-lg px-6 py-3 font-semibold">
//               Ajouter Entrée
//             </button>
//           </div>
//           <div className="overflow-x-auto w-full">
//             <table className="w-full border-collapse border border-gray-300 shadow-md text-lg">
//               <thead className="bg-gray-200">
//                 <tr>
//                   {["Produit", "Stock Initial", "Entrées", "Sorties", "Stock Final", "Variation"].map((header, index) => (
//                     <th key={index} className="border border-gray-300 px-6 py-4 text-left text-gray-700 font-bold text-xl">
//                       {header}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {entries.map((entry, index) => (
//                   <tr key={index} className="hover:bg-gray-100">
//                     <td className="border border-gray-300 px-6 py-4">{entry.product}</td>
//                     <td className="border border-gray-300 px-6 py-4">100</td>
//                     <td className="border border-gray-300 px-6 py-4">{entry.quantity}</td>
//                     <td className="border border-gray-300 px-6 py-4">-</td>
//                     <td className="border border-gray-300 px-6 py-4">{100 + entry.quantity}</td>
//                     <td className="border border-gray-300 px-6 py-4 text-green-600 font-bold">+{entry.quantity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import Nav from "./Nav";

export default function WeeklyInventory() {
  const [agencies, setAgencies] = useState([]);
  const [newAgency, setNewAgency] = useState("");
  const [editingAgency, setEditingAgency] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAgencies = async () => {
    try {
      const response = await fetch("https://backend-soutenance-1.onrender.com/Agence");
      if (!response.ok) throw new Error("Erreur lors de la récupération des agences.");
      const data = await response.json();
      console.log("Agences récupérées :", data);
      setAgencies(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchAgencies();
  }, []);

  const addAgency = async () => {
    if (!newAgency.trim()) return;
    setLoading(true);
    setError("");
    console.log("Ajout de l'agence :", newAgency);

    try {
      const response = await fetch("https://backend-soutenance-1.onrender.com/Agence", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newAgency.trim() }),
      });

      console.log("Réponse POST :", response.status);
      if (!response.ok) throw new Error("Erreur lors de l'ajout de l'agence.");
      const addedAgency = await response.json();
      console.log("Agence ajoutée :", addedAgency);
      setAgencies([...agencies, addedAgency]);
      setNewAgency("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateAgency = async (id, updatedName) => {
    if (!updatedName.trim()) return;
    setLoading(true);
    setError("");
    console.log("Mise à jour de l'agence :", { id, updatedName });

    try {
      const response = await fetch(`https://backend-soutenance-1.onrender.com/Agence/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: updatedName.trim() }),
      });

      console.log("Réponse PUT :", response.status);
      if (!response.ok) throw new Error("Erreur lors de la mise à jour de l'agence.");

      const updatedAgency = await response.json();
      console.log("Agence mise à jour :", updatedAgency);

      setAgencies(agencies.map((agency) => (agency._id === id ? updatedAgency : agency)));
      setEditingAgency(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteAgency = async (id) => {
    setLoading(true);
    setError("");
    console.log("Suppression de l'agence :", id);

    try {
      const response = await fetch(`https://backend-soutenance-1.onrender.com/Agence/${id}`, {
        method: "DELETE",
      });

      console.log("Réponse DELETE :", response.status);
      if (!response.ok) throw new Error("Erreur lors de la suppression de l'agence.");

      setAgencies(agencies.filter((agency) => agency._id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 w-full">
      <Nav />
      <div className="flex flex-col items-center justify-center flex-1 p-4 w-full">
        <section className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
          <h2 className="text-gray-800 font-semibold text-2xl mb-4 text-center">Gérer les Agences</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <div className="flex items-center gap-4 mb-6 w-full">
            <input
              type="text"
              placeholder="Nom de l'agence"
              className="flex-1 border rounded-lg p-3"
              value={newAgency}
              onChange={(e) => setNewAgency(e.target.value)}
            />
            <button
              onClick={addAgency}
              disabled={loading}
              className={`bg-green-500 text-white rounded-lg px-6 py-3 font-semibold ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "Ajout en cours..." : "Ajouter"}
            </button>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full border-collapse border border-gray-300 shadow-md text-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-6 py-4 text-left text-gray-700 font-bold text-xl">Nom de l'Agence</th>
                  <th className="border border-gray-300 px-6 py-4 text-center text-gray-700 font-bold text-xl">Actions</th>
                </tr>
              </thead>
              <tbody>
                {agencies.map((agency) => (
                  <tr key={agency._id} className="hover:bg-gray-100">
                    <td className="border border-gray-300 px-6 py-4">
                      {editingAgency === agency._id ? (
                        <input
                          type="text"
                          className="border rounded-lg p-2 w-full"
                          value={newAgency}
                          onChange={(e) => setNewAgency(e.target.value)}
                        />
                      ) : (
                        agency.name
                      )}
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-center">
                      {editingAgency === agency._id ? (
                        <button
                          onClick={() => updateAgency(agency._id, newAgency)}
                          className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2"
                        >
                          Sauvegarder
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setEditingAgency(agency._id);
                            setNewAgency(agency.name);
                          }}
                          className="bg-yellow-500 text-white rounded-lg px-4 py-2 mr-2"
                        >
                          Modifier
                        </button>
                      )}
                      <button
                        onClick={() => deleteAgency(agency._id)}
                        className="bg-red-500 text-white rounded-lg px-4 py-2"
                      >
                        Supprimer
                      </button>
                    </td>
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
