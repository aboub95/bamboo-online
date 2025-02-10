// "use client";

// import React from "react";
// import TableauAdmin from "./tableauAdmnin";
// import Nav from "./Nav";

// const Home = () => {
//   return (
//     <div className="bg-white min-h-screen flex shadow-emerald-950 ">
//       {/* Section TableauAdmin */}
      
//       <TableauAdmin />

//       <div className="min-h-screen bg-gray-100 flex flex-col w-full">
//         {/* Barre de navigation */}
//         <Nav />

//         {/* En-tête */}
//         <header className="bg-blue-400 h-20 text-white py-4">
//           <div className="container mx-auto text-center text-2xl font-semibold">
//             Bamboo Assur - Gestion de Stock
//           </div>
//         </header>

//         {/* Contenu principal */}
//         <main className="container mx-auto p-4">
//           {/* Section des statistiques */}
//           <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//             {["Total des Produits", "Alertes Stock Bas", "Distributions du Jour"].map(
//               (title, index) => (
//                 <div
//                   key={index}
//                   className="bg-blue-400 rounded-lg shadow-md p-4 flex flex-col items-center"
//                 >
//                   <h3 className="text-white text-sm font-medium">{title}</h3>
//                   <p className="text-3xl font-bold text-white">0</p>
//                 </div>
//               )
//             )}
//           </section>

//           {/* Suivi hebdomadaire des mouvements */}
//           <section className="bg-white rounded-lg shadow-md p-4 mb-8">
//             <h2 className="text-gray-800 font-semibold text-lg mb-4">
//               Suivi Hebdomadaire des Mouvements
//             </h2>
//             <div className="flex flex-wrap items-center gap-4 mb-4">
//               <select className="flex-1 border rounded-lg p-2">
//                 <option>Sélectionner un produit</option>
//                 <option>Livre</option>
//                 <option>cahier</option>
//                 <option>sacs</option>
//                 <option>stylo</option>
//               </select>
//               <input
//                 type="number"
//                 placeholder="Quantité"
//                 className="flex-1 border rounded-lg p-2"
//               />
//               <input
//                 type="date"
//                 className="flex-1 border rounded-lg p-2"
//               />
//               <button className="bg-green-500 text-white rounded-lg px-4 py-2">
//                 Ajouter Entrée
//               </button>
//             </div>
//             <table className="w-full border-collapse border border-gray-200">
//               <thead className="bg-gray-100">
//                 <tr>
//                   {[
//                     "Agence",
//                     "Produit",
//                     "Stock Initial",
//                     "Entrées",
//                     "Sorties",
//                     "Stock Final",
//                     "Variation",
//                   ].map((header, index) => (
//                     <th
//                       key={index}
//                       className="border border-gray-200 px-4 py-2 text-left"
//                     >
//                       {header}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   {Array(7)
//                     .fill(" ")
//                     .map((_, index) => (
//                       <td
//                         key={index}
//                         className="border border-gray-200 px-4 py-2"
//                       >
//                         -
//                       </td>
//                     ))}
//                 </tr>
//               </tbody>
//             </table>
//           </section>

//           {/* Saisie des produits */}
//           <section className="bg-white rounded-lg shadow-md p-4 mb-8">
//             <h2 className="text-gray-800 font-semibold text-lg mb-4">
//               Saisie des Produits
//             </h2>
//             <div className="flex items-center gap-4">
//               <input
//                 type="text"
//                 placeholder="Nom du produit"
//                 className="flex-1 border rounded-lg p-2"
//               />
//               <select className="flex-1 border rounded-lg p-2">
//                 <option>Sélectionner un fournisseur</option>
//                 <option>fournisseur1</option>
//                 <option>fournisseur2</option>
//                 <option>fournisseur3</option>
//                 <option>fournisseur4</option>
//               </select>
//               <input
//                 type="number"
//                 placeholder="Quantité"
//                 className="flex-1 border rounded-lg p-2"
//               />
//               <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
//                 +
//               </button>
//             </div>
//           </section>

//           {/* Distribution des produits */}
//           <section className="bg-white rounded-lg shadow-md p-4 mb-8">
//             <h2 className="text-gray-800 font-semibold text-lg mb-4">
//               Distribution des Produits
//             </h2>
//             <div className="flex flex-wrap items-center gap-4">
//               <select className="flex-1 border rounded-lg p-2">
//                 <option>Sélectionner une agence</option>*
//                 <option>Agence Libreville</option>
//                 <option>Agence Port-gentil</option>
//               </select>
//               <select className="flex-1 border rounded-lg p-2">
//                 <option>Sélectionner un produit</option>
//                 <option>Sélectionner un produit</option>
//                 <option>Livre</option>
//                 <option>cahier</option>
//                 <option>sacs</option>
//                 <option>stylo</option>
//               </select>
//               <input
//                 type="number"
//                 placeholder="Quantité"
//                 className="flex-1 border rounded-lg p-2"
//               />
//               <input
//                 type="date"
//                 className="flex-1 border rounded-lg p-2"
//               />
//               <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
//                 Envoyer
//               </button>
//             </div>
//           </section>

//           {/* État du stock */}
//           <section className="bg-white rounded-lg shadow-md p-4 mb-8">
//             <h2 className="text-gray-800 font-semibold text-lg mb-4">
//               État du Stock
//             </h2>
//             <table className="w-full border-collapse border border-gray-200">
//               <thead className="bg-gray-100">
//                 <tr>
//                   {["Produit", "Fournisseur", "Quantité", "Seuil Minimal"].map(
//                     (header, index) => (
//                       <th
//                         key={index}
//                         className="border border-gray-200 px-4 py-2 text-left"
//                       >
//                         {header}
//                       </th>
//                     )
//                   )}
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   {Array(4)
//                     .fill(" ")
//                     .map((_, index) => (
//                       <td
//                         key={index}
//                         className="border border-gray-200 px-4 py-2"
//                       >
//                         -
//                       </td>
//                     ))}
//                 </tr>
//               </tbody>
//             </table>
//           </section>

//           {/* Historique des distributions */}
//           <section className="bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-gray-800 font-semibold text-lg mb-4">
//               Historique des Distributions
//             </h2>
//             <table className="w-full border-collapse border border-gray-200">
//               <thead className="bg-gray-100">
//                 <tr>
//                   {["Date", "Agence", "Produit", "Quantité"].map(
//                     (header, index) => (
//                       <th
//                         key={index}
//                         className="border border-gray-200 px-4 py-2 text-left"
//                       >
//                         {header}
//                       </th>
//                     )
//                   )}
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   {Array(4)
//                     .fill(" ")
//                     .map((_, index) => (
//                       <td
//                         key={index}
//                         className="border border-gray-200 px-4 py-2"
//                       >
//                         -
//                       </td>
//                     ))}
//                 </tr>
//               </tbody>
//             </table>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Home;
"use client";

import React, { useState } from "react";
import TableauAdmin from "./tableauAdmnin";
import Nav from "./Nav";

const Home = () => {
  // États pour stocker les données
  const [stock, setStock] = useState([]);
  const [distributions, setDistributions] = useState([]);
  const [mouvements, setMouvements] = useState([]);

  // Gestion de la saisie des produits
  const handleProductEntry = (e) => {
    e.preventDefault();
    const form = e.target;
    const nom = form.nom.value;
    const fournisseur = form.fournisseur.value;
    const quantite = parseInt(form.quantite.value, 10);
    
    if (nom && fournisseur && quantite > 0) {
      setStock([...stock, { nom, fournisseur, quantite, seuil: 10 }]);
      form.reset();
    }
  };

  // Gestion de la distribution des produits
  const handleDistribution = (e) => {
    e.preventDefault();
    const form = e.target;
    const agence = form.agence.value;
    const produit = form.produit.value;
    const quantite = parseInt(form.quantite.value, 10);
    const date = form.date.value;

    if (agence && produit && quantite > 0 && date) {
      setDistributions([...distributions, { date, agence, produit, quantite }]);
      setMouvements([...mouvements, { agence, produit, quantite, type: "sortie" }]);
      
      // Mise à jour du stock
      setStock(stock.map(item => item.nom === produit ? { ...item, quantite: item.quantite - quantite } : item));
      form.reset();
    }
  };

  return (
    <div className="bg-white min-h-screen flex shadow-emerald-950">
      <TableauAdmin />
      <div className="min-h-screen bg-gray-100 flex flex-col w-full">
        <Nav />
        <header className="bg-blue-400 h-20 text-white py-4">
          <div className="container mx-auto text-center text-2xl font-semibold">
            Bamboo Assur - Gestion de Stock
          </div>
        </header>

         {/* Contenu principal */}
{/* //         <main className="container mx-auto p-4"> */}
           {/* Section des statistiques */}
           <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 mt-5">
             {["Total des Produits", "Alertes Stock Bas", "Distributions du Jour"].map(
              (title, index) => (
                <div
                  key={index}
                  className="bg-blue-400 rounded-lg shadow-md p-4 flex flex-col items-center"
                >
                  <h3 className="text-white text-sm font-medium">{title}</h3>
                  <p className="text-3xl font-bold text-white">0</p>
                </div>
              )
            )}
          </section>

        {/* Suivi hebdomadaire des mouvements */}
           <section className="bg-white rounded-lg shadow-md p-4 mb-8">
             <h2 className="text-gray-800 font-semibold text-lg mb-4">
               Suivi Hebdomadaire des Mouvements
             </h2>
             <div className="flex flex-wrap items-center gap-4 mb-4">
               <select className="flex-1 border rounded-lg p-2">
                 <option>Sélectionner un produit</option>
                 <option>Livre</option>
                 <option>cahier</option>
                 <option>sacs</option>
                 <option>stylo</option>
              </select>
              <input
                type="number"
                placeholder="Quantité"
                className="flex-1 border rounded-lg p-2"
              />
              <input
                type="date"
                className="flex-1 border rounded-lg p-2"
              />
              <button className="bg-green-500 text-white rounded-lg px-4 py-2">
                Ajouter Entrée
              </button>
            </div>
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  {[
                    "Agence",
                    "Produit",
                    "Stock Initial",
                    "Entrées",
                    "Sorties",
                    "Stock Final",
                    "Variation",
                  ].map((header, index) => (
                    <th
                      key={index}
                      className="border border-gray-200 px-4 py-2 text-left"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Array(7)
                    .fill(" ")
                    .map((_, index) => (
                      <td
                        key={index}
                        className="border border-gray-200 px-4 py-2"
                      >
                        -
                      </td>
                    ))}
                </tr>
              </tbody>
            </table>
          </section>

      </div>
    </div>
  );
};

export default Home;
