"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "./Nav";

export default function Clients() {
  // États pour gérer les données des agences, le chargement et les erreurs
  const [agences, setAgences] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les données de l'API
  useEffect(() => {
    async function fetchAgences() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/"
        ); // URL mise à jour pour renvoyer un tableau
        if (!response.ok) {
          throw new Error(`Erreur: ${response.status}`);
        }
        const data = await response.json();
        setAgences(data); // Mise à jour de l'état avec les données reçues
      } catch (err) {
        setError(err.message); // Capture des erreurs
      } finally {
        setChargement(false); // Fin du chargement
      }
    }

    fetchAgences();
  }, []); // Exécuter une seule fois au montage du composant

  return (
    <div className="container mx-auto px-4 shadow-lg bg-white">
      <Nav />
      <div className="flex w-full bg-white shadow-lg">
        <div className="flex-1 bg-white w-full h-screen">
          <div className="my-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold text-gray-800">AGENCES</h1>
              <Link href="/creationagence">
                <button className="flex items-center bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600 hover:scale-95 transition duration-150">
                  Ajouter une Agence
                </button>
              </Link>
            </div>

            <div className="card shadow-md border rounded-lg">
              <div className="card-header flex justify-between items-center py-3 px-4 bg-gray-100">
                <h6 className="font-semibold text-blue-600">
                  Liste des agences
                </h6>
              </div>
              <div className="p-4">
                <div className="overflow-x-auto">
                  {chargement ? (
                    <p>Chargement des agences...</p>
                  ) : error ? (
                    <p className="text-red-500">Erreur: {error}</p>
                  ) : (
                    <table className="table-auto w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="px-4 py-2 text-left">ID</th>
                          <th className="px-4 py-2 text-left">Titre</th>
                          <th className="px-4 py-2 text-left">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {agences.map((agence) => (
                          <tr key={agence.id} className="border-b">
                            <td className="px-4 py-2">{agence.nom}</td>
                            <td className="px-4 py-2">{agence.title}</td>
                            <td className="px-4 py-2">{agence.body}</td>
                            <td className="px-4 py-2">{agence.userId}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>

                {/* Pagination ou autres actions ici */}
                <div className="mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
