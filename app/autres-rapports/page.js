// "use client";
// import { useState } from "react";

// export default function WeeklyReport() {
//   const [report, setReport] = useState([
//     { id: 1, produit: "Produit A", recu: 100, vendu: 60, restant: 40 },
//     { id: 2, produit: "Produit B", recu: 80, vendu: 50, restant: 30 },
//     { id: 3, produit: "Produit C", recu: 120, vendu: 100, restant: 20 },
//   ]);

//   return (
//     <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
//       <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Rapport Hebdomadaire</h1>
//       <table border="1" width="100%" cellPadding="8" style={{ borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th>Produit</th>
//             <th>Reçu</th>
//             <th>Vendu</th>
//             <th>Restant</th>
//           </tr>
//         </thead>
//         <tbody>
//           {report.map((item) => (
//             <tr key={item.id}>
//               <td>{item.produit}</td>
//               <td>{item.recu}</td>
//               <td>{item.vendu}</td>
//               <td>{item.restant}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px", gap: "10px" }}>
//         <button style={{ padding: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Exporter en PDF</button>
//         <button style={{ padding: "10px", backgroundColor: "green", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Exporter en Excel</button>
//       </div>
//     </div>
//   );
// }
