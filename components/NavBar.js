import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logoBamboo.jpg"
            alt="Logo Bamboo"
            width={4000}
            height={4000}
            className="rounded-3xl h-20 w-64 p-2 max-sm:ml-16" // Optionnel, ajoute un style circulaire
          />
          <h1 className="text-white text-lg font-bold ml-4 flex items-center max-sm:hidden">
            <i className="bi bi-box-seam mr-2 "></i>
            Bamboo Assur - Gestion de Stock
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
