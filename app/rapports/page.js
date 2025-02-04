"use client";
import Link from "next/link";
import TableauAdmin from "@/components/tableauAdmnin";
import Nav from "@/components/Nav";
import { useState } from "react";
import { Chart } from "react-google-charts";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";


export default function Rapport() {
  const [filter, setFilter] = useState("agence");

  const data = [
    ["Semaine", "Consommation"],
    ["Semaine 1", 100],
    ["Semaine 2", 150],
    ["Semaine 3", 120],
    ["Semaine 4", 180],
  ];

  const options = {
    title: "Tendances de Consommation",
    curveType: "function",
    legend: { position: "bottom" },
  };

  return (
    <div className="flex">
      <TableauAdmin />
      <div className="container bg-slate-50 mx-auto p-4">
        <Nav />
        <div className="flex w-full shadow-lg mt-10 max-sm:mt-20">
          <div className="flex w-full bg-white shadow-lg p-6 rounded-xl">
            <div className="flex-1 w-full">
              <div className="flex justify-between bg-blue-400 items-center rounded-xl p-6 mb-6">
                <h1 className="text-2xl font-bold text-white">Rapports de Consommation</h1>
                <Link href="/autres-rapports">
                  <button className="flex items-center bg-green-500 text-white py-3 px-5 rounded-xl hover:bg-blue-600 transition duration-150">
                    Autres rapports
                  </button>
                </Link>
              </div>
              
              
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Filtrer par :</label>
                <select
                  className="w-full p-3 border rounded-lg"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="agence">Agence</option>
                  <option value="produit">Produit</option>
                  <option value="fournisseur">Fournisseur</option>
                </select>
              </div>
              
          
              <div className="card shadow-md border rounded-lg p-4 mb-6">
                <table className="table-auto w-full border-collapse">
                  <thead>
                    <tr className="border-b bg-gray-100">
                      <th className="px-4 py-2 text-left">Nom</th>
                      <th className="px-4 py-2 text-left">Consommation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2">Agence A</td>
                      <td className="px-4 py-2">120 unités</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2">Agence B</td>
                      <td className="px-4 py-2">90 unités</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
          
              <div className="mb-6">
                <Chart
                  chartType="LineChart"
                  width="100%"
                  height="300px"
                  data={data}
                  options={options}
                />
              </div>
        
              <div className="flex space-x-4">
                <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" /> Exporter en PDF
                </button>
                <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" /> Exporter en Excel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
