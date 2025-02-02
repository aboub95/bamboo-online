"use client";

import { useState } from "react";
import Link from "next/link";

export default function Connexion() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-300 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Identifiant</label>
            <input
              type="text"
              name="username"
              placeholder="Entrez votre identifiant"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Mot de passe</label>
            <input
              type="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              Se souvenir de moi
            </label>
            <Link href="/" className="text-cyan-600 hover:underline">
              Mot de passe oublié ?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
