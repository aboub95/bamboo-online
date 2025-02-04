import Link from "next/link";
import TableauAdmin from "@/components/tableauAdmnin";
import Nav from "@/components/Nav";

export default function Addfleurs() {
  return (
    <div className="flex bg-gray-300 min-h-screen shadow-lg">
      <TableauAdmin />
      <div className="container mx-auto px-4">
        <Nav />
        <div className="flex flex-col justify-center items-center h-screen px-4">
          <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6 text-center">Ajouter un Fournisseur</h1>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-lg font-semibold mb-2">Fournisseur</label>
                <input
                  type="text"
                  name="nom"
                  placeholder="Entrez le nom du fournisseur"
                  required
                  className="w-full border border-gray-300 focus:border-blue-500 outline-none rounded-md px-3 py-2"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-md text-lg py-2 w-full hover:bg-blue-600 transition duration-300"
                >
                  Créer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
