"use client";

import React, { useState } from "react";
import Navbar from "./NavBar";
import Image from "next/image";
import Link from "next/link";

const Accueil = () => {
  const [stockDonnées, setStockDonnées] = useState([]);
  const [distributionHistory, setDistributionHistory] = useState([]);
  const [totalProduits, setTotalProduits] = useState(0);
  const [lowStockAlerts, setLowStockAlerts] = useState(0);
  const [todayDistributions, setTodayDistributions] = useState(0);
  const minimumThreshold = 10;

  const gérerSoumissionFormulaireProduit = (e) => {
    e.preventDefault();
    const produitNom = e.target.produitNom.value;
    const supplier = e.target.supplier.value;
    const Quantité = parseInt(e.target.Quantité.value, 10);

    const NouveauProduit = {
      name: produitNom,
      supplier,
      Quantité,
      threshold: minimumThreshold,
    };

    setStockDonnées((prevStock) => [...prevStock, NouveauProduit]);
    e.target.reset();
    updateDashboardStats(
      [...stockDonnées, NouveauProduit],
      distributionHistory
    );
  };
  // je cree la section  distribution de produit..
  const traiterSoumissionDistribution = (e) => {
    e.preventDefault();
    const agency = e.target.agency.value;
    const productName = e.target.product.value;
    const quantity = parseInt(e.target.distributionQuantity.value, 10);
    const date = e.target.distributionDate.value;

    const productIndex = stockDonnées.findIndex((p) => p.name === productName);

    if (
      productIndex !== -1 &&
      stockDonnées[productIndex].quantity >= quantity
    ) {
      const updatedStock = [...stockDonnées];
      updatedStock[productIndex].quantity -= quantity;

      setStockDonnées(updatedStock);
      setDistributionHistory((prevHistory) => [
        ...prevHistory,
        { date, agency, product: productName, quantity },
      ]);

      updateDashboardStats(updatedStock, [
        ...distributionHistory,
        { date, agency, product: productName, quantity },
      ]);
    } else {
      alert("Stock insuffisant!");
    }
  };

  const updateDashboardStats = (updatedStockDonnées, updatedHistory) => {
    setTotalProduits(updatedStockDonnées.length);
    setLowStockAlerts(
      updatedStockDonnées.filter((p) => p.quantity <= p.threshold).length
    );

    const today = new Date().toISOString().split("T")[0];
    setTodayDistributions(
      updatedHistory.filter((d) => d.date === today).length
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Je met une section entete ave le logo de Bamboo assur ici....! */}
      <Navbar />

      <div className="container mx-auto mt-8 px-4">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
            <h6 className="flex items-center">
              <i className="bi bi-graph-up mr-2"></i>Total des Produits
            </h6>
            <h2 className="text-2xl font-bold">{totalProduits}</h2>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-lg shadow">
            <h6 className="flex items-center">
              <i className="bi bi-exclamation-triangle mr-2"></i>Alertes Stock
              Bas
            </h6>
            <h2 className="text-2xl font-bold">{lowStockAlerts}</h2>
          </div>
          <div className="bg-green-500 text-white p-4 rounded-lg shadow">
            <h6 className="flex items-center">
              <i className="bi bi-arrow-left-right mr-2"></i>Distributions du
              Jour
            </h6>
            <h2 className="text-2xl font-bold">{todayDistributions}</h2>
          </div>
        </div>

        {/* Product Form je suis ici actuellement */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h5 className="text-lg font-bold mb-4">Saisie des Produits</h5>
          <form
            onSubmit={gérerSoumissionFormulaireProduit}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <input
              type="text"
              className="form-input p-3 rounded-md border border-cyan-500 focus:border-cyan-400 outline-none"
              name="productName"
              placeholder="Nom du produit"
              required
            />
            <select
              className="form-select rounded-md border border-cyan-500 focus:border-cyan-400 outline-none"
              name="supplier"
              required
            >
              <option value="">Sélectionner un fournisseur</option>
              <option value="AXA">AXA</option>
              <option value="SUNU">SUNU</option>
              <option value="SANLAM">SANLAM</option>
              <option value="OGAR">OGAR</option>
              <option value="ASSINCO">ASSINCO</option>
              <option value="NSIA">NSIA</option>
            </select>
            <input
              type="number"
              className="form-input rounded-md p-3 border border-cyan-500 focus:border-cyan-400 outline-none"
              name="quantity"
              placeholder="Quantité"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              <i className="bi bi-plus-lg text-xl">Ajouter</i>
            </button>
          </form>
        </div>
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h5 className="text-lg font-bold mb-4">Distribution du Produit</h5>
          <form
            onSubmit={traiterSoumissionDistribution}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <input
              type="text"
              className="form-input p-3 rounded-md border border-cyan-500 focus:border-cyan-400 outline-none"
              name="productName"
              placeholder="Nom du produit"
              required
            />
            <select
              className="form-select rounded-md border border-cyan-500 focus:border-cyan-400 outline-none"
              name="supplier"
              required
            >
              <option value="">Sélectionner un produit</option>
              <option value="A">Produit A</option>
              <option value="B">Produit B</option>
              <option value="C">Produit C</option>
              <option value="D">Produit D</option>
              <option value="E">Produit E</option>
              <option value="F">Produit F</option>
            </select>
            <input
              type="number"
              className="form-input rounded-md p-3 border border-cyan-500 focus:border-cyan-400 outline-none"
              name="quantity"
              placeholder="Quantité"
              required
            />
            <input type="date" />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 h-15 w-20 hover:scale-110 transition duration-100"
            >
              <i className="bi bi-plus-lg text-xl">
                <Image
                  className="h-10 w-10"
                  src="/add2.svg"
                  alt="add"
                  width={100}
                  height={100}
                />
              </i>
            </button>
          </form>
        </div>

        {/* Stock Table */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h5 className="text-lg font-bold mb-4">État du Stock</h5>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2 text-left">Produit</th>
                <th className="border-b p-2 text-left">Fournisseur</th>
                <th className="border-b p-2 text-left">Quantité</th>
                <th className="border-b p-2 text-left">Seuil Minimal</th>
              </tr>
            </thead>
            <tbody>
              {stockDonnées.map((product, index) => (
                <tr key={index}>
                  <td className="p-2">{product.name}</td>
                  <td className="p-2">{product.supplier}</td>
                  <td className="p-2">{product.quantity}</td>
                  <td className="p-2">{product.threshold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
