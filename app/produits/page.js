"use client";

import Link from "next/link";
import TableauAdmin from "@/components/tableauAdmnin";
import Nav from "@/components/Nav";
import { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Produit() {
  const [products, setProducts] = useState([
    { id: 1, code_produit: "CP001", produit: "Produit 1", fournisseur: "F1", categorie: "C1", prix: 100, gratuit: false, quantite: 50, stock_mini: 10 },
    { id: 2, code_produit: "CP002", produit: "Produit 2", fournisseur: "F2", categorie: "C2", prix: 150, gratuit: true, quantite: 30, stock_mini: 5 },
    { id: 3, code_produit: "CP003", produit: "Produit 3", fournisseur: "F3", categorie: "C3", prix: 200, gratuit: false, quantite: 20, stock_mini: 8 },
  ]);

  const [newProduct, setNewProduct] = useState({
    code_produit: "",
    produit: "",
    fournisseur: "",
    categorie: "",
    prix: 0,
    gratuit: false,
    quantite: 0,
    stock_mini: 0,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddProduct = () => {
    setProducts([
      ...products,
      { id: products.length + 1, ...newProduct },
    ]);
    setNewProduct({
      code_produit: "",
      produit: "",
      fournisseur: "",
      categorie: "",
      prix: 0,
      gratuit: false,
      quantite: 0,
      stock_mini: 0,
    });
  };

  const handleEdit = (id) => {
    const selectedProduct = products.find((p) => p.id === id);
    const productName = prompt("Modifier le nom du produit:", selectedProduct?.produit);
    if (productName) {
      setProducts(products.map((p) => (p.id === id ? { ...p, produit: productName } : p)));
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
            </div>

            {/* Formulaire d'ajout de produit */}
            <div className="mb-6 p-6 bg-gray-50 border rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ajouter un produit</h2>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="code_produit" placeholder="Code Produit" value={newProduct.code_produit} onChange={handleInputChange} className="p-2 border rounded-lg" />
                <input type="text" name="produit" placeholder="Nom du produit" value={newProduct.produit} onChange={handleInputChange} className="p-2 border rounded-lg" />
                <input type="text" name="fournisseur" placeholder="Fournisseur" value={newProduct.fournisseur} onChange={handleInputChange} className="p-2 border rounded-lg" />
                
                <input type="text" name="categorie" placeholder="Catégorie" value={newProduct.categorie} onChange={handleInputChange} className="p-2 border rounded-lg" />

                <input type="number" name="prix" placeholder="Prix" value={newProduct.prix} onChange={handleInputChange} className="p-2 border rounded-lg" />
                <input type="number" name="quantite" placeholder="Quantité" value={newProduct.quantite} onChange={handleInputChange} className="p-2 border rounded-lg" />
                <input type="number" name="stock_mini" placeholder="Stock minimum" value={newProduct.stock_mini} onChange={handleInputChange} className="p-2 border rounded-lg" />
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="gratuit" checked={newProduct.gratuit} onChange={handleInputChange} />
                  <span>Gratuit</span>
                </label>
              </div>
              <button onClick={handleAddProduct} className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
                Ajouter
              </button>
            </div>

            <div className="shadow-md border rounded-lg overflow-hidden">
              <div className="py-4 px-6 bg-gray-100 border-b">
                <h6 className="font-semibold text-blue-600">Produits</h6>
              </div>
              <div className="p-6 overflow-x-auto">
                <table className="w-full border-collapse table-auto text-left">
                  <thead className="bg-gray-200 text-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-lg">Code Produit</th>
                      <th className="px-6 py-3 text-lg">Nom</th>
                      <th className="px-6 py-3 text-lg">Fournisseur</th>
                      <th className="px-6 py-3 text-lg">Catégorie</th>
                      <th className="px-6 py-3 text-lg">Prix</th>
                      <th className="px-6 py-3 text-lg">Gratuit</th>
                      <th className="px-6 py-3 text-lg">Quantité</th>
                      <th className="px-6 py-3 text-lg">Stock Min.</th>
                      <th className="px-6 py-3 text-lg text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr
                        key={product.id}
                        className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                      >
                        <td className="px-6 py-4 text-md">{product.code_produit}</td>
                        <td className="px-6 py-4 text-md">{product.produit}</td>
                        <td className="px-6 py-4 text-md">{product.fournisseur}</td>
                        <td className="px-6 py-4 text-md">{product.categorie}</td>
                        <td className="px-6 py-4 text-md">{product.prix} FCFA</td>
                        <td className="px-6 py-4 text-md">{product.gratuit ? "Oui" : "Non"}</td>
                        <td className="px-6 py-4 text-md">{product.quantite}</td>
                        <td className="px-6 py-4 text-md">{product.stock_mini}</td>
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
