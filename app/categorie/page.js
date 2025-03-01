"use client";
import { useState, useEffect } from "react";
import TableauAdmin from "@/components/tableauAdmnin";
import Nav from "@/components/Nav";

export default function GestionCategories() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const API_URL = "https://backend-soutenance-1.onrender.com/categorie";

  // Fonction pour récupérer les catégories depuis l'API
  const getCategories = async () => {
    try {
      const response = await fetch(API_URL);
      console.log('Réponse GET:', response);

      if (!response.ok) {
        throw new Error(`Erreur HTTP GET: ${response.status}`);
      }

      const data = await response.json();
      console.log('Données récupérées:', data);

      // Vérifie si les données sont dans un format attendu
      if (Array.isArray(data)) {
        setCategories(data);
      } else if (data.data && Array.isArray(data.data)) {
        setCategories(data.data);
      } else {
        throw new Error("Format des données inattendu");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories:", error);
    }
  };

  // Appeler getCategories lors du montage du composant
  useEffect(() => {
    getCategories();
  }, []);

  // Ajouter une nouvelle catégorie
  const ajouterCategorie = async () => {
    if (newCategory.trim()) {
      const nouvelleCategorie = { nom: newCategory };
      console.log('Envoi de la catégorie:', nouvelleCategorie);

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nouvelleCategorie),
        });

        console.log('Réponse POST:', response);

        if (!response.ok) {
          throw new Error(`Erreur HTTP POST: ${response.status}`);
        }

        const data = await response.json();
        console.log('Catégorie ajoutée:', data);

        // Rafraîchir la liste après l'ajout
        await getCategories();
        setNewCategory("");
      } catch (error) {
        console.error("Erreur lors de l'ajout de la catégorie:", error);
      }
    }
  };

  // Supprimer une catégorie
  const supprimerCategorie = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      console.log('Réponse DELETE:', response);

      if (!response.ok) {
        throw new Error(`Erreur HTTP DELETE: ${response.status}`);
      }

      // Rafraîchir la liste après suppression
      await getCategories();
    } catch (error) {
      console.error("Erreur lors de la suppression de la catégorie:", error);
    }
  };

  return (
    <div className="flex h-screen">
      <TableauAdmin />
      <div className="flex-1 p-6">
        <Nav />
        <h1 className="text-2xl font-bold mb-4">1.3 Gestion des Catégories</h1>

        <div className="flex items-center space-x-3 mb-4">
          <input
            type="text"
            placeholder="Nom de la catégorie"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={ajouterCategorie}
          >
            Ajouter
          </button>
        </div>

        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200"> 
            <tr className="bg-gray-200">
              <th className="border p-2 border-gray-300">Nom de la Catégorie</th>
              <th className="border p-2 border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((categorie) => (
              <tr key={categorie.id || categorie._id} className="text-center">
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
                    onClick={() => supprimerCategorie(categorie.id || categorie._id)}
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
