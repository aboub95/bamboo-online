import Link from "next/link";
import Image from "next/image";
import TableauAdmin from "@/components/tableauAdmnin";
import Nav from "@/components/Nav";

export default function Fournisseurs() {
  // const flseurs = [
  //   {
  //     name: "John Doe",
  //     email: "john@example.com",
  //     role: "Admin",
  //     status: "Active",
  //   },
  //   {
  //     name: "Jane Smith",
  //     email: "jane@example.com",
  //     role: "Editor",
  //     status: "Active",
  //   },
  //   {
  //     name: "Mike Johnson",
  //     email: "mike@example.com",
  //     role: "User",
  //     status: "Inactive",
  //   },
  //   {
  //     name: "Mike Abou",
  //     email: "mike@example.com",
  //     role: "User",
  //     status: "Active",
  //   },
  // ];

  return (
    <div className="flex">
      <TableauAdmin />
      <div className="container bg-slate-50 mx-auto p-4">
        <Nav />
        <div className="flex w-full shadow-lg mt-10 max-sm:mt-24">
          <div className="flex w-full bg-white shadow-lg">
            {/* Main Content */}
            <div className="flex-1 w-full h-screen">
              {/* Users Table */}
              <div className="my-6">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-3xl max-sm:text-xl font-bold text-gray-800 p-6">
                    Fournisseurs
                  </h1>
                  <Link className="max-sm:hidden" href="/inscrit">
                    <button className="flex items-center bg-green-500 text-white py-3 px-5 mr-5 max-sm:w-18 rounded hover:bg-blue-600 hover:scale-95 transition duration-150">
                      Ajouter un Fournisseur
                    </button>
                  </Link>
                  <Link className="md:sm:hidden" href="/inscrit">
                    <Image
                      src="/add.png"
                      alt="add"
                      width={40}
                      height={40}
                      className="md:sm:hidden"
                    />
                  </Link>
                </div>

                <div className="card shadow-md border rounded-lg max-sm:mt-5">
                  <div className="card-header flex justify-between items-center py-3 px-4 bg-gray-100">
                    <h6 className="font-semibold text-blue-600">Libreville</h6>
                    <div className="w-1/4"></div>
                  </div>
                  <div className="p-4">
                    <div className="overflow-x-auto">
                      <table className="table-auto w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="px-4 py-2 text-left">Nom</th>
                            {/* <th className="px-4 py-2 text-left">
                              Chef d'Agence
                            </th> */}
                          </tr>
                        </thead>
                        {/* <tbody>
                          {flseurs.map((user, index) => (
                            <tr
                              key={index}
                              className="border-b bg-slate-500 hover:bg-gray-50"
                            >
                              <td className="px-4 py-2">
                                <div className="flex items-center">
                                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                                    <i className="fas fa-user text-white">
                                      <Image
                                        className="rounded-full"
                                        src="/addm.png"
                                        alt="person"
                                        width={1000}
                                        height={1000}
                                      />
                                    </i>
                                  </div>
                                  {user.name}
                                </div>
                              </td>
                              <td className="px-4 py-2">{user.email}</td>
                              <td className="px-4 py-2">{user.role}</td>
                              <td className="px-4 py-2">
                                <span
                                  className={`inline-block w-2.5 h-2.5 rounded-full mr-2 ${
                                    user.status === "Active"
                                      ? "bg-green-700"
                                      : "bg-gray-500"
                                  }`}
                                ></span>
                                {user.status}
                              </td>
                              <td className="px-4 py-2">
                                <button className="text-blue-600 hover:text-blue-800 mr-2">
                                  <i className="fas fa-edit"></i>
                                </button>
                                <button className="text-red-600 hover:text-red-800">
                                  <i className="fas fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody> */}
                      </table>
                    </div>

                    {/* Je mets uen Pagination ici pour voir les différentes Agences  */}
                    <div className="mt-4 bg-green-400 h-7 w-full">
                      {/* <ul className="flex justify-end space-x-2">
                        <li>
                          <button className="px-4 py-2 bg-gray-200 rounded-l-lg">
                            Revenir
                          </button>
                        </li>
                        <li>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded">
                            1
                          </button>
                        </li>
                        <li>
                          <button className="px-4 py-2 bg-gray-200">2</button>
                        </li>
                        <li>
                          <button className="px-4 py-2 bg-gray-200">3</button>
                        </li>
                        <li>
                          <button className="px-4 py-2 bg-gray-200 rounded-r-lg">
                            Suivant
                          </button>
                        </li>
                      </ul> */}
                    </div>
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
