"use client";

import React, { useState } from "react";
import TableauAdmin from "@/components/tableauAdmnin";
import Nav from "@/components/Nav";

const Distribution = () => {
  const [stockDonnées, setStockDonnées] = useState([]);
  const [distributionHistory, setDistributionHistory] = useState([]);
  const [totalProduits, setTotalProduits] = useState(0);
  const [stockAlerts, setStockAlerts] = useState(0);
  const [distributionsProduits, setDistributionsProduits] = useState(0);
  const minimumProduits = 10;

  const gérerSoumissionFormulaireProduit = async (e) => {
    e.preventDefault();
    const codeProduit = e.target.code_produit.value;
    const produitId = e.target.produit.value;
    const quantite = parseInt(e.target.quantite.value, 10);
    const fournisseurId = e.target.fournisseur.value;
    const distribueA = e.target.distribue_a.value;
    const date = e.target.date.value;

    if (!codeProduit || !produitId || isNaN(quantite) || quantite <= 0 || !fournisseurId || !distribueA || !date) {
      alert("Veuillez remplir tous les champs correctement.");
      return;
    }

    const nouveauProduit = {
      code_produit: codeProduit,
      produit: produitId,
      quantite,
      fournisseur: fournisseurId,
      distribue_a: distribueA,
      date,
      threshold: minimumProduits,
    };

    try {
      const response = await fetch("https://backend-soutenance-1.onrender.com/distribuer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nouveauProduit),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi des données au serveur.");
      }

      const data = await response.json();
      const nouveauStock = [...stockDonnées, data];
      setStockDonnées(nouveauStock);
      e.target.reset();
      updateDashboardStats(nouveauStock, distributionHistory);
    } catch (error) {
      console.error("Erreur:", error);
      alert("Échec de l'envoi des données. Veuillez réessayer.");
    }
  };

  const updateDashboardStats = (updatedStock, updatedHistory) => {
    setTotalProduits(updatedStock.length);
    setStockAlerts(updatedStock.filter((p) => p.quantite <= p.threshold).length);

    const today = new Date().toISOString().split("T")[0];
    setDistributionsProduits(updatedHistory.filter((d) => d.date === today).length);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <TableauAdmin />
      <div className="container mx-auto w-full px-6">
        <Nav />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mb-8">
          <StatCard title="Total des Produits" value={totalProduits} color="bg-green-600" />
          <StatCard title="Alertes Stock Bas" value={stockAlerts} color="bg-red-500" />
          <StatCard title="Distributions du Jour" value={distributionsProduits} color="bg-blue-600" />
        </div>

        <FormSection title="Distribution de Produit" onSubmit={gérerSoumissionFormulaireProduit} fields={[
          { name: "code_produit", type: "text", placeholder: "Code du produit", required: true },
          { name: "produit", type: "text", placeholder: "produit", required: true },
          { name: "quantite", type: "number", placeholder: "Quantité", required: true },
          { name: "fournisseur", type: "text", placeholder: "fournisseur", required: true },
          { name: "distribue_a", type: "text", placeholder: "destinataire", required: true },
          { name: "date", type: "date", required: true },
        ]} />

        <StockTable stockDonnées={stockDonnées} />
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color }) => (
  <div className={`${color} text-white p-6 rounded-lg shadow-md`}>
    <h6 className="text-lg font-semibold">{title}</h6>
    <h2 className="text-2xl font-bold">{value}</h2>
  </div>
);

const FormSection = ({ title, onSubmit, fields }) => (
  <div className="bg-white shadow rounded-lg p-6 mb-8">
    <h5 className="text-xl font-bold mb-4">{title}</h5>
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {fields.map((field, idx) => (
        <input
          key={idx}
          type={field.type}
          className="form-input p-3 border rounded-md"
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
        />
      ))}
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
        Envoyer
      </button>
    </form>
  </div>
);

const StockTable = ({ stockDonnées }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <h5 className="text-xl font-bold mb-4">État du Stock</h5>
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200 text-gray-700">
          <th className="p-3 text-left">Code Produit</th>
          <th className="p-3 text-left">Produit</th>
          <th className="p-3 text-left">Quantité</th>
          <th className="p-3 text-left">Fournisseur</th>
          <th className="p-3 text-left">Destinataire</th>
          <th className="p-3 text-left">Date</th>
          <th className="p-3 text-left">Seuil Minimal</th>
        </tr>
      </thead>
      <tbody>
        {stockDonnées.map((product, idx) => (
          <tr key={idx} className="border-b hover:bg-gray-100">
            <td className="p-3">{product.code_produit}</td>
            <td className="p-3">{product.produit}</td>
            <td className="p-3">{product.quantite}</td>
            <td className="p-3">{product.fournisseur}</td>
            <td className="p-3">{product.distribue_a}</td>
            <td className="p-3">{product.date}</td>
            <td className="p-3">{product.threshold}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Distribution;
