import Link from "next/link";

const gérerSoumissionFormulaireProduit = (e) => {
  e.preventDefault();
  const produitNom = e.target.produitNom.value;
  const supplier = e.target.supplier.value;
  const quantité = parseInt(e.target.quantité.value, 10);

  const NewProduit = {
    name: produitNom,
    supplier,
    quantité,
    threshold: minimumThreshold,
  };

  setStockDonnées((prevStock) => [...prevStock, NewProduit]);
  e.target.reset();
  updateDashboardStats([...stockDonnées, NewProduit], distributionHistory);
};

export default function Produits() {
  return (
    <>
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h5 className="text-lg font-bold mb-4">Distribution des Produits</h5>
        <form
          onSubmit={gérerSoumissionFormulaireProduit}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <input
            type="text"
            className="form-input p-3 rounded-md border border-cyan-500 focus:border-cyan-400 outline-none"
            name="productName"
            placeholder="Nom du produit"
            required
          />
          <select
            className="form-select rounded-md border border-cyan-500 focus:border-cyan-400 outline-none"
            name="supplier"
            required
          >
            <option value="">Sélectionner un fournisseur</option>
            <option value="AXA">AXA</option>
            <option value="SUNU">SUNU</option>
            <option value="SANLAM">SANLAM</option>
            <option value="OGAR">OGAR</option>
            <option value="ASSINCO">ASSINCO</option>
            <option value="NSIA">NSIA</option>
          </select>
          <input
            type="number"
            className="form-input rounded-md p-3 border border-cyan-500 focus:border-cyan-400 outline-none"
            name="quantity"
            placeholder="Quantité"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            <i className="bi bi-plus-lg text-xl">Ajouter</i>
          </button>
        </form>
      </div>
    </>
  );
}
