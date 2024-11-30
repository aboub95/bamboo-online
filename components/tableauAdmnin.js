import Link from "next/link";
import Image from "next/image";
import IconMenu from "./MenuIcon";

import {
  ArrowDownCircleIcon,
  ArrowDownIcon,
  ArrowLongLeftIcon,
  ChartBarIcon,
  ChartBarSquareIcon,
  ChartPieIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  HomeIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  QueueListIcon,
  RectangleGroupIcon,
  UserGroupIcon,
  UserIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";

export default function TableauAdmin() {
  return (
    <div className="" style={{ backgroundImage: `url(4)` }}>
      <section className="bg-blue-500 text-white h-screen p-6 w-64">
        {/* Je mets le logo de Bamboo assure ici */}
        <Image src="/logoBamboo.jpg" alt="logo" width={2000} height={2000} />
        <ul className="space-y-16 mt-8 font-bold ">
          {[
            {
              href: "/distribution",
              icon: "fa-tachometer-alt",
              label: "Accueil",
            },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href="/"
                className="flex items-center space-x-3 hover:bg-blue-600 p-3 rounded"
              >
                <HomeIcon
                  className={`fas ${item.icon} text-lg h-8 w-8`}
                ></HomeIcon>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="space-y-16 mt-8 font-bold ">
          {[
            {
              href: "/dash",
              icon: "fa-tachometer-alt",
              label: "AGENCES",
            },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href="/clientelles"
                className="flex items-center space-x-3 hover:bg-blue-600 p-3 rounded"
              >
                <UserGroupIcon
                  className={`fas ${item.icon} text-lg h-8 w-8`}
                ></UserGroupIcon>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-16 mt-8 font-bold">
          {[
            {
              href: "/distribution",
              icon: "fa-tachometer-alt",
              label: "Distribution ",
            },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href="/distribution"
                className="flex items-center space-x-3 hover:bg-blue-600 p-3 rounded"
              >
                <InboxIcon
                  className={`fas ${item.icon} text-lg h-8 w-8`}
                ></InboxIcon>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="space-y-16 mt-8">
          {[
            {
              href: "/distribution",
              icon: "fa-tachometer-alt",
              label: "Produits",
            },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href="/distribution"
                className="flex items-center space-x-3 hover:bg-blue-600 p-3 rounded"
              >
                <RectangleGroupIcon
                  className={`fas ${item.icon} text-lg h-8 w-8`}
                ></RectangleGroupIcon>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="space-y-16 mt-8 mb-10">
          {[
            {
              href: "/distribution",
              icon: "fa-tachometer-alt",
              label: "Analyses",
            },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href="/dash"
                className="flex items-center space-x-3 hover:bg-blue-600 p-3 rounded"
              >
                <ChartPieIcon
                  className={`fas ${item.icon} text-lg h-8 w-8`}
                ></ChartPieIcon>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <IconMenu />
      </section>
    </div>
  );
}
