"use client";

import React, { useState } from "react";

import TableauAdmin from "./tableauAdmnin";
import Nav from "./Nav";

const Accueil = () => {
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

  const traiterSoumissionDistribution = (e) => {
    e.preventDefault();
    const agency = e.target.agency.value;
    const productName = e.target.productName.value;
    const quantity = parseInt(e.target.quantity.value, 10);
    const date = e.target.distributionDate.value;

    const productIndex = stockDonnées.findIndex((p) => p.name === productName);

    if (
      productIndex !== -1 &&
      stockDonnées[productIndex].quantity >= quantity
    ) {
      const updatedStock = [...stockDonnées];
      updatedStock[productIndex].quantity -= quantity;

      const nouvelleDistribution = {
        date,
        agency,
        product: productName,
        quantity,
      };

      setStockDonnées(updatedStock);
      setDistributionHistory((prevHistory) => [
        ...prevHistory,
        nouvelleDistribution,
      ]);

      updateDashboardStats(updatedStock, [
        ...distributionHistory,
        nouvelleDistribution,
      ]);
    } else {
      alert("Stock insuffisant !");
    }

    if (!produitNom || !supplier || isNaN(quantity) || quantity <= 0) {
      alert("Veuillez remplir tous les champs correctement.");
      return;
    }
  };

  const updateDashboardStats = (updatedStock, updatedHistory) => {
    setTotalProduits(updatedStock.length);
    setStockAlerts(
      updatedStock.filter((p) => p.quantity <= p.threshold).length
    );

    const today = new Date().toISOString().split("T")[0];
    setDistributionsProduits(
      updatedHistory.filter((d) => d.date === today).length
    );
  };

  return (
    <div className="bg-white min-h-screen flex shadow-emerald-950">
      <TableauAdmin />

      <div className="container bg-white mx-auto  px-4">
        <Nav />
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-6 mb-8">
          <StatCard
            color="blue"
            title="Total des Produits"
            value={totalProduits}
          />
          <StatCard
            color="yellow"
            title="Alertes Stock Bas"
            value={stockAlerts}
          />
          <StatCard
            color="green"
            title="Distributions du Jour"
            value={distributionsProduits}
          />
        </div>

        {/* Product Form */}
        <FormSection
          className="border border-cyan-500 focus:outline-none"
          title="Ajouter un produit"
          onSubmit={gérerSoumissionFormulaireProduit}
          fields={[
            {
              name: "productName",
              type: "text",
              placeholder: "cde_pro",
              required: true,
            },

            {
              name: "productName",
              type: "text",
              placeholder: "Nom du produit",
              required: true,
            },

            {
              name: "supplier",
              type: "select",
              options: ["AXA", "SUNU", "SANLAM", "OGAR", "ASSINCO", "NSIA"],
              placeholder: "Sélectionner un fournisseur",
              required: true,
            },
            {
              name: "quantity",
              type: "number",
              placeholder: "Quantité",
              required: true,
            },
            { name: "distributionDate", type: "date", required: true },
          ]}
        />

        {/* Stock Table */}
        <StockTable stockDonnées={stockDonnées} />
      </div>
    </div>
  );
};

const StatCard = ({ color, title, value }) => (
  <div className={`bg-${color}-500 text-white p-4 rounded-lg shadow`}>
    <h6>{title}</h6>
    <h2 className="text-2xl font-bold">{value}</h2>
  </div>
);

const FormSection = ({ title, onSubmit, fields }) => (
  <div className="bg-white shadow rounded-lg  mb-8">
    <div className="bg-cyan-500 h-20 rounded shadow-lg p-6  mb-3">
      <h5 className="text-2xl text-white font-bold mb-4">
        Ajouter des Produits...
      </h5>
    </div>
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-1 bg-white md:grid-cols-3 pb-3 pt-3 gap-4"
    >
      {fields.map((field, idx) =>
        field.type === "select" ? (
          <select
            key={idx}
            className="form-select rounded-md p-3 border focus:border-blue-400"
            name={field.name}
            required={field.required}
          >
            <option value="">{field.placeholder}</option>
            {Array.isArray(field.options) &&
              field.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        ) : (
          <input
            key={idx}
            type={field.type}
            className="form-input rounded-md p-3 border border-cyan-500 focus:outline-none"
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
          />
        )
      )}
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:scale-95 transition duration-150"
      >
        Ajouter
      </button>
    </form>
    <div className=" flex justify-between items-center shadow-md rounded-md py-3 px-4 bg-gray-100">
      <h6 className="font-semibold text-blue-600">Suivis des mouvements</h6>
      <div className="w-1/4"></div>
    </div>
    <div className="grid grid-cols-1 bg-white- pb-5  md:grid-cols-3 mt-3 max-sm:grid-cols-2 gap-4">
      <input
        className=" border border-cyan-500 focus:outline-none p-5 rounded-lg font-extrabold "
        type="text"
        required="true"
        placeholder="Agence :"
      />
      <input
        className=" border border-cyan-500 focus:outline-none p-5 rounded-lg font-extrabold "
        type="text"
        required="true w-40"
        placeholder="Produit :"
      />
      <input
        className=" border border-cyan-500 focus:outline-none p-5 rounded-lg font-extrabold "
        type="text"
        required="true w-40"
        placeholder="Stock Initial :"
      />
      <input
        className=" border border-cyan-500 focus:outline-none p-5 rounded-lg font-extrabold "
        type="text"
        required="true w-40"
        placeholder="Sortie :"
      />
      <input
        className=" border border-cyan-500 focus:outline-none p-5 rounded-lg font-extrabold "
        type="text"
        required="true w-40"
        placeholder="Stock Final :"
      />
      <input
        className=" border border-cyan-500 focus:outline-none p-5 rounded-lg font-extrabold "
        type="text"
        required="true w-40"
        placeholder="Variation :"
      />
    </div>
  </div>
);

const StockTable = ({ stockDonnées }) => (
  <div className="bg-white shadow rounded-lg">
    <div className="bg-cyan-500 h-20 rounded p-6 mb-3">
      <h5 className="text-2xl text-white font-bold mb-4">État du Stock</h5>
    </div>
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border-b p-2">Produit</th>
          <th className="border-b p-2">Fournisseur</th>
          <th className="border-b p-2">Quantité</th>
          <th className="border-b p-2">Seuil Minimal</th>
        </tr>
      </thead>
      <tbody>
        {stockDonnées.map((product, idx) => (
          <tr key={idx}>
            <td className="p-2">{product.name}</td>
            <td className="p-2">{product.supplier}</td>
            <td className="p-2">{product.quantity}</td>
            <td className="p-2">{product.threshold}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Accueil;
