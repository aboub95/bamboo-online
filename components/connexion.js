"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Connexion() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
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
    <div className="min-h-screen grid place-items-center bg-gradient-to-br bg-cyan-600 p-4">
      <div className="bg-white rounded-xl overflow-hidden w-full max-w-4xl h-auto flex shadow-lg">
        {/* Left Side */}
        <div
          className="bg-cover bg-center text-white p-8 w-1/2"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59, 89, 152, 0.85), rgba(59, 89, 152, 0.85)), url('/admin.jpg')",
          }}
        >
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Bienvenu sur votre
            <br />
            Dashboard.
          </h1>
          <p className="opacity-90 mb-6">
            Notre dashboar Administrateur pour la gestion et le suivis des
            activités.
          </p>
          <div>Média sociaux de connexion</div>
          <div className="flex gap-4 mt-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full text-white hover:opacity-90">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
              </svg>
              Facebook
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-400 rounded-full text-white hover:opacity-90">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
              </svg>
              Twitter
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 w-1/2">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <p className="mb-6">
            Entrez vos information
            <br />
            <a href="/signup" className="text-purple-700 hover:underline">
              pour vous connecter
            </a>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="username"
                placeholder="M.OBIANG MBA"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="mr-2"
                />
                Se souvenir de moi
              </label>
              <Link href="/" className="text-purple-700 hover:underline">
                Mot de passe oublier
              </Link>
            </div>
            <Link href="/accueil">
              <button
                type="submit"
                className="w-full p-3 bg-green-500 text-white rounded-full hover:bg-green-600"
              >
                Se connecter
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
