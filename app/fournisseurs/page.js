import Link from "next/link";
import TableauAdmin from "@/components/tableauAdmnin";
import Nav from "@/components/Nav";

export default function Fournisseurs() {
  return (
    <div className="flex">
      <TableauAdmin />
      <div className="container bg-slate-50 mx-auto p-6">
        <Nav />
        <div className="flex w-full shadow-lg mt-10 max-sm:mt-24">
          <div className="flex w-full bg-white shadow-lg p-8 rounded-lg">
            <div className="flex-1 w-full">
              <div className="my-6">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-3xl max-sm:text-xl font-bold text-gray-800">Fournisseurs</h1>
                  <Link href="/inscrit">
                    <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 hover:scale-95 transition duration-150">
                      Ajouter un Fournisseur
                    </button>
                  </Link>
                </div>
                <div className="shadow-md border rounded-lg overflow-hidden">
                  <div className="py-4 px-6 bg-gray-100 border-b">
                    <h6 className="font-semibold text-blue-600">Liste des Fournisseurs</h6>
                  </div>
                  <div className="p-6 overflow-x-auto">
                    <table className="w-full border-collapse table-auto">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="px-6 py-4 text-left text-lg">Nom</th>
                          <th className="px-6 py-4 text-left text-lg">Email</th>
                          <th className="px-6 py-4 text-left text-lg">Rôle</th>
                          <th className="px-6 py-4 text-left text-lg">Statut</th>
                          <th className="px-6 py-4 text-left text-lg">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b bg-gray-50 hover:bg-gray-100">
                          <td className="px-6 py-4">John Doe</td>
                          <td className="px-6 py-4">john@example.com</td>
                          <td className="px-6 py-4">Admin</td>
                          <td className="px-6 py-4"><span className="text-green-600 font-semibold">Actif</span></td>
                          <td className="px-6 py-4 flex space-x-4">
                            <button className="text-blue-600 hover:text-blue-800">✏️</button>
                            <button className="text-red-600 hover:text-red-800">🗑️</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="p-6 flex justify-end border-t bg-gray-50">
                    <span className="text-md text-gray-500">1 fournisseur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
