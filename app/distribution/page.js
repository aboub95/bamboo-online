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

  const gérerSoumissionFormulaireProduit = (e) => {
    e.preventDefault();
    const produitNom = e.target.productName.value;
    const supplier = e.target.supplier.value;
    const quantity = parseInt(e.target.quantity.value, 10);

    if (!produitNom || !supplier || isNaN(quantity) || quantity <= 0) {
      alert("Veuillez remplir tous les champs correctement.");
      return;
    }

    const nouveauProduit = {
      name: produitNom,
      supplier,
      quantity,
      threshold: minimumProduits,
    };

    const nouveauStock = [...stockDonnées, nouveauProduit];
    setStockDonnées(nouveauStock);
    e.target.reset();
    updateDashboardStats(nouveauStock, distributionHistory);
  };

  const updateDashboardStats = (updatedStock, updatedHistory) => {
    setTotalProduits(updatedStock.length);
    setStockAlerts(updatedStock.filter((p) => p.quantity <= p.threshold).length);

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
          { name: "productName", type: "text", placeholder: "Nom du produit", required: true },
          { name: "supplier", type: "select", options: ["Libreville", "Port-Gentil", "Akanda"], placeholder: "Sélectionner une Agence", required: true },
          { name: "quantity", type: "number", placeholder: "Quantité", required: true },
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
      {fields.map((field, idx) =>
        field.type === "select" ? (
          <select key={idx} className="form-select p-3 border rounded-md" name={field.name} required={field.required}>
            <option value="">{field.placeholder}</option>
            {field.options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        ) : (
          <input key={idx} type={field.type} className="form-input p-3 border rounded-md" name={field.name} placeholder={field.placeholder} required={field.required} />
        )
      )}
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">Envoyer</button>
    </form>
  </div>
);

const StockTable = ({ stockDonnées }) => (
  <div className="bg-white shadow rounded-lg p-6">
    <h5 className="text-xl font-bold mb-4">État du Stock</h5>
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200 text-gray-700">
          <th className="p-3 text-left">Produit</th>
          <th className="p-3 text-left">Agence</th>
          <th className="p-3 text-left">Quantité</th>
          <th className="p-3 text-left">Date</th>
          <th className="p-3 text-left">Seuil Minimal</th>
        </tr>
      </thead>
      <tbody>
        {stockDonnées.map((product, idx) => (
          <tr key={idx} className="border-b hover:bg-gray-100">
            <td className="p-3">{product.name}</td>
            <td className="p-3">{product.supplier}</td>
            <td className="p-3">{product.quantity}</td>
            <td className="p-3">{product.date}</td>
            <td className="p-3">{product.threshold}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Distribution;