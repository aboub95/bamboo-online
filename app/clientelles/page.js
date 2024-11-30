import Link from "next/link";
import Image from "next/image";
import Clients from "@/components/user";
import TableauAdmin from "@/components/tableauAdmnin";

export default function Agences() {
  return (
    <div className="flex">
      <TableauAdmin />
      <Clients />
    </div>
  );
}
