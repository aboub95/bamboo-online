"use client";
import { useState, useEffect } from "react";
import TableauAdmin from "@/components/tableauAdmnin";
import Nav from "@/components/Nav";
import { BellIcon } from "@heroicons/react/24/outline";

export default function Stocks() {
  const [stocks, setStocks] = useState([
    { id: 1, product: "Produit A", agency: "Agence 1", quantity: 50, threshold: 20 },
    { id: 2, product: "Produit B", agency: "Agence 2", quantity: 15, threshold: 10 },
    { id: 3, product: "Produit C", agency: "Agence 1", quantity: 5, threshold: 10 },
  ]);

  useEffect(() => {
    stocks.forEach((stock) => {
      if (stock.quantity <= stock.threshold) {
        alert(`Stock critique pour ${stock.product} à ${stock.agency} !`);
      }
    });
  }, [stocks]);

  return (
    <div className="flex">
      <TableauAdmin />
      <div className="container bg-slate-50 mx-auto p-6">
        <Nav />
        <div className="shadow-lg bg-white p-6 rounded-lg mt-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Suivi des Stocks</h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left">Produit</th>
                  <th className="px-4 py-3 text-left">Agence</th>
                  <th className="px-4 py-3 text-left">Quantité</th>
                  <th className="px-4 py-3 text-left">Seuil</th>
                  <th className="px-4 py-3 text-left">Alerte</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((stock) => (
                  <tr key={stock.id} className="border-b">
                    <td className="px-4 py-3">{stock.product}</td>
                    <td className="px-4 py-3">{stock.agency}</td>
                    <td className="px-4 py-3">{stock.quantity}</td>
                    <td className="px-4 py-3">{stock.threshold}</td>
                    <td className="px-4 py-3">
                      {stock.quantity <= stock.threshold ? (
                        <BellIcon className="h-6 w-6 text-red-600" />
                      ) : (
                        "OK"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
