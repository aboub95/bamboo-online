// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Nav from "./Nav";

// export default function Clients() {
//   // États pour gérer les données des agences, le chargement et les erreurs
//   const [agences, setAgences] = useState([]);
//   const [chargement, setChargement] = useState(true);
//   const [erreur, setErreur] = useState(null);

//   // Fonction pour récupérer les données de l'API
//   useEffect(() => {
//     async function fetchAgences() {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts/"
//         );
//         if (!response.ok) {
//           throw new Error(`Erreur: ${response.status}`);
//         }
//         const data = await response.json();
//         setAgences(data); // Mise à jour de l'état avec les données que vais reçevoir de l'API de Marvin.
//       } catch (err) {
//         setErreur(err.message); // Capture des erreurs
//       } finally {
//         setChargement(false); // Le chargement des Agences prend fin ici.
//       }
//     }

//     fetchAgences();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 shadow-lg">
//       <Nav />
//       <div className="flex w-full max-sm:mt-24  bg-white shadow-lg">
//         <div className="flex-1 bg-white w-full h-screen">
//           <div className="my-6">
//             <div className="flex justify-between items-center mb-4">
//               <h1 className="text-3xl font-bold max-sm:text-xl ml-4 text-gray-800">
//                 Agences
//               </h1>
//               <Link href="/creationagence">
//                 <button className="flex items-center bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600 hover:scale-95 transition duration-150 max-sm:hidden">
//                   Ajouter une Agence
//                 </button>
//               </Link>
//               <Link className="md:sm:hidden" href="/creationagence">
//                 <Image
//                   src="/add.png"
//                   alt="add"
//                   width={40}
//                   height={40}
//                   className="md:sm:hidden"
//                 />
//               </Link>
//             </div>

//             <div className="card shadow-md border rounded-lg">
//               <div className="card-header flex justify-between items-center py-3 px-4 bg-gray-100">
//                 <h6 className="font-semibold text-blue-600">
//                   Liste des agences
//                 </h6>
//               </div>
//               <div className="p-4">
//                 <div className="overflow-x-auto">
//                   {chargement ? (
//                     <p>Chargement des agences...</p>
//                   ) : erreur ? (
//                     <p className="text-red-500">Erreur: {erreur}</p>
//                   ) : (
//                     <table className="table-auto w-full border-collapse">
//                       <thead>
//                         <tr className="border-b">
//                           <th className="px-4 py-2 text-left">ID</th>
//                           <th className="px-4 py-2 text-left">Titre</th>
//                           <th className="px-4 py-2 text-left">Description</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {agences.map((agence) => (
//                           <tr key={agence.id} className="border-b">
//                             <td className="px-4 py-2">{agence.nom}</td>
//                             <td className="px-4 py-2">{agence.title}</td>
//                             <td className="px-4 py-2">{agence.body}</td>
//                             <td className="px-4 py-2">{agence.userId}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   )}
//                 </div>

                
//                 <div className="mt-4"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
