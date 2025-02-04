"use client";

import Link from "next/link";
import TableauAdmin from "@/components/tableauAdmnin";
import Nav from "@/components/Nav";
import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Produit() {
  const [products, setProducts] = useState([
    { id: 1, name: "Produit 1" },
    { id: 2, name: "Produit 2" },
    { id: 3, name: "Produit 3" },
  ]);

  const handleEdit = (id) => {
    const productName = prompt(
      "Modifier le nom du produit:",
      products.find((p) => p.id === id)?.name
    );
    if (productName) {
      setProducts(
        products.map((p) => (p.id === id ? { ...p, name: productName } : p))
      );
    }
  };

  const handleDelete = (id) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <TableauAdmin />
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
        <Nav />
        <div className="mt-10 max-sm:mt-24">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Liste des produits</h1>
              <Link href="/inscrit">
                <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition">
                  Ajouter un produit
                </button>
              </Link>
            </div>

            <div className="shadow-md border rounded-lg overflow-hidden">
              <div className="py-4 px-6 bg-gray-100 border-b">
                <h6 className="font-semibold text-blue-600">Produits</h6>
              </div>
              <div className="p-6 overflow-x-auto">
                <table className="w-full border-collapse table-auto text-left">
                  <thead className="bg-gray-200 text-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-lg">Nom</th>
                      <th className="px-6 py-3 text-lg text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr
                        key={product.id}
                        className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                      >
                        <td className="px-6 py-4 text-md">{product.name}</td>
                        <td className="px-6 py-4 flex justify-center space-x-6">
                          <button
                            className="text-blue-600 hover:text-blue-800"
                            onClick={() => handleEdit(product.id)}
                          >
                            <PencilIcon className="h-6 w-6" />
                          </button>
                          <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => handleDelete(product.id)}
                          >
                            <TrashIcon className="h-6 w-6" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-6 flex justify-end border-t bg-gray-50">
                <span className="text-md text-gray-500">
                  {products.length} produit(s)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
