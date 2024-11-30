"use client";

import { useEffect } from "react";
import ApexCharts from "apexcharts";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import TableauAdmin from "./tableauAdmnin";

export default function DashboardAdmin() {
  useEffect(() => {
    // Line Chart
    const earningsOptions = {
      series: [
        {
          name: "Produits",
          data: [
            10000, 15000, 12000, 20000, 18000, 22000, 25000, 23000, 28000,
            30000, 32000, 40000,
          ],
        },
      ],
      chart: { height: 350, type: "line", toolbar: { show: false } },
      colors: ["#4e73df"],
      stroke: { curve: "smooth", width: 3 },
      xaxis: {
        categories: [
          "Janvier",
          "Fevrier",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Aout",
          "Septembre",
          "Octobre",
          "Novembre",
          "Decembre",
        ],
      },
      tooltip: { y: { formatter: (value) => `${value}F` } },
    };
    const earningsChart = new ApexCharts(
      document.querySelector("#earningsChart"),
      earningsOptions
    );
    earningsChart.render();

    // Donut Chart
    const revenueOptions = {
      series: [44, 35, 21],
      chart: { type: "donut", height: 350 },
      labels: ["Vacances", "Social", "Voyage"],
      colors: ["#4e73df", "#1cc88a", "#36b9cc"],
    };
    const revenueChart = new ApexCharts(
      document.querySelector("#revenueChart"),
      revenueOptions
    );
    revenueChart.render();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      {/* <section className="bg-blue-500 text-white min-h-screen p-6 w-64">
       
        <Image src="/logoBamboo.jpg" alt="logo" width={2000} height={2000} />
        <ul className="space-y-4">
          {[
            {
              href: "/",
              icon: "fa-tachometer-alt",
              label: "Dashboardnb ",
            },
            { href: "/admins", icon: "fa-users", label: "Utilisateurs" },
            { href: "/", icon: "fa-chart-line", label: "Analyse" },
            { href: "/", icon: "fa-cog", label: "Paramètres" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href="/dash"
                className="flex items-center space-x-3 hover:bg-blue-600 p-3 rounded"
              >
                <i className={`fas ${item.icon} text-lg`}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section> */}
      <TableauAdmin />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">
        {/* Topbar */}
        {/* <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <input
            type="search"
            placeholder="Rechercher..."
            className="w-1/2 p-2 rounded border border-cyan-500 focus:outline-none"
          />
          <div className="flex items-center space-x-6">
            <div className="relative">
              <i className="fas fa-bell text-gray-500 text-xl"></i>
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                8
              </span>
            </div>
            <div className="relative">
              <i className="fas fa-user-circle text-gray-500 text-2xl"></i>
            </div>
          </div>
        </nav> */}

        <Nav />

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              {
                title: "Produits du mois",
                value: "40000",
                icon: "fa-calendar",
                color: "bg-blue-500",
              },
              {
                title: "Clients",
                value: "2453",
                icon: "fa-users",
                color: "bg-green-500",
              },
              {
                title: "Agences",
                value: "75%",
                icon: "fa-clipboard-list",
                color: "bg-teal-500",
              },
              {
                title: "Service",
                value: "24",
                icon: "fa-shopping-cart",
                color: "bg-yellow-500",
              },
            ].map((card, index) => (
              <div
                className={`p-4 rounded shadow-lg flex justify-between items-center text-white ${card.color}`}
                key={index}
              >
                <div>
                  <h4 className="text-sm font-bold uppercase">{card.title}</h4>
                  <p className="text-2xl font-bold">{card.value}</p>
                </div>
                <i className={`fas ${card.icon} text-3xl`}></i>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2 bg-white rounded shadow p-6">
              <h5 className="font-bold text-gray-700 mb-4">
                Données statistiques
              </h5>
              <div id="earningsChart" className="h-80"></div>
            </div>
            <div className="bg-white rounded shadow p-6">
              <h5 className="font-bold text-gray-700 mb-4">
                Rentabilités Mensuelles
              </h5>
              <div id="revenueChart" className="h-80"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
