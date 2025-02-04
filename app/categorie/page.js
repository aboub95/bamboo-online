"use client";
import { useState } from "react";
import TableauAdmin from "@/components/tableauAdmnin";
import Nav from "@/components/Nav";

export default function GestionCategories() {
  const [categories, setCategories] = useState([
    { id: 1, nom: "Électronique" },
    { id: 2, nom: "Vêtements" },
    { id: 3, nom: "Alimentation" },
  ]);

  const ajouterCategorie = () => {
    const nom = prompt("Entrez le nom de la catégorie :");
    if (nom) {
      setCategories([...categories, { id: Date.now(), nom }]);
    }
  };

  const supprimerCategorie = (id) => {
    setCategories(categories.filter((categorie) => categorie.id !== id));
  };

  return (
    <div className="flex h-screen">
      <TableauAdmin />
      <div className="flex-1 p-6">
        <Nav />
        <h1 className="text-2xl font-bold mb-4">1.3 Gestion des Catégories</h1>
        <button
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={ajouterCategorie}
        >
          Ajouter une Catégorie
        </button>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Nom de la Catégorie</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((categorie) => (
              <tr key={categorie.id} className="text-center">
                <td className="border p-2">{categorie.nom}</td>
                <td className="border p-2 space-x-2">
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    onClick={() => alert("Modifier la catégorie : " + categorie.nom)}
                  >
                    Modifier
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => supprimerCategorie(categorie.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
