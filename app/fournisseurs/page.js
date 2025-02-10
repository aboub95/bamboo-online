"use client";
import { useState } from "react";
import Link from "next/link";
import TableauAdmin from "@/components/tableauAdmnin";
import Nav from "@/components/Nav";

export default function Fournisseurs() {
  const [fournisseurs, setFournisseurs] = useState([
    { id: 1, nom: "John Doe" },
  ]);

  const [newFournisseur, setNewFournisseur] = useState({ nom: "" });

  // Gestion des changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFournisseur((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Ajout d'un nouveau fournisseur
  const ajouterFournisseur = (e) => {
    e.preventDefault();
    if (newFournisseur.nom) {
      setFournisseurs([
        ...fournisseurs,
        { id: Date.now(), ...newFournisseur },
      ]);
      setNewFournisseur({ nom: "" });
    }
  };

  // Suppression d'un fournisseur
  const supprimerFournisseur = (id) => {
    setFournisseurs(fournisseurs.filter((f) => f.id !== id));
  };

  return (
    <div className="flex">
      <TableauAdmin />
      <div className="container bg-slate-50 mx-auto p-6">
        <Nav />
        <div className="flex w-full shadow-lg mt-10 max-sm:mt-24">
          <div className="flex w-full bg-white shadow-lg p-8 rounded-lg">
            <div className="flex-1 w-full">
              <div className="my-6">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-3xl max-sm:text-xl font-bold text-gray-800">
                    Fournisseurs
                  </h1>
                  <Link href="#ajout-fournisseur">
                    <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 hover:scale-95 transition duration-150">
                      Ajouter un Fournisseur
                    </button>
                  </Link>
                </div>

                {/* Formulaire d'ajout de fournisseur */}
                <div id="ajout-fournisseur" className="mb-8 p-6 bg-gray-100 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Nouveau Fournisseur</h2>
                  <form onSubmit={ajouterFournisseur} className="space-y-4">
                    <div>
                      <label className="block text-gray-600">Nom</label>
                      <input
                        type="text"
                        name="nom"
                        value={newFournisseur.nom}
                        onChange={handleChange}
                        placeholder="Nom du fournisseur"
                        className="w-full border p-2 rounded"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                    >
                      Enregistrer
                    </button>
                  </form>
                </div>

                {/* Liste des Fournisseurs */}
                <div className="shadow-md border rounded-lg overflow-hidden">
                  <div className="py-4 px-6 bg-gray-100 border-b">
                    <h6 className="font-semibold text-blue-600">Liste des Fournisseurs</h6>
                  </div>
                  <div className="p-6 overflow-x-auto">
                    <table className="w-full border-collapse table-auto">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="px-6 py-4 text-left text-lg">Nom</th>
                          <th className="px-6 py-4 text-left text-lg">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fournisseurs.map((fournisseur) => (
                          <tr key={fournisseur.id} className="border-b bg-gray-50 hover:bg-gray-100">
                            <td className="px-6 py-4">{fournisseur.nom}</td>
                            <td className="px-6 py-4 flex space-x-4">
                              <button
                                className="text-blue-600 hover:text-blue-800"
                                onClick={() => alert(`Modifier : ${fournisseur.nom}`)}
                              >
                                ✏️ Modifier
                              </button>
                              <button
                                className="text-red-600 hover:text-red-800"
                                onClick={() => supprimerFournisseur(fournisseur.id)}
                              >
                                🗑️ Supprimer
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="p-6 flex justify-end border-t bg-gray-50">
                    <span className="text-md text-gray-500">
                      {fournisseurs.length} {fournisseurs.length > 1 ? "fournisseurs" : "fournisseur"}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
