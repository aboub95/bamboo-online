"use client";

import { useState } from "react";

// components/IconMenu.js

import Link from "next/link";
import Image from "next/image";
import {
  ArrowDownCircleIcon,
  ArrowDownIcon,
  ArrowLongLeftIcon,
  Bars3Icon,
  CogIcon,
  LockOpenIcon,
  MoonIcon,
  QuestionMarkCircleIcon,
  QueueListIcon,
  SunIcon,
  UserIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";

export default function IconMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <Bars3Icon
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center ml-12 h-8 w-8 border rounded-md shadow-sm text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Options
      </Bars3Icon>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute top-left- mt-2 w-56 bg-blue-600 border border-gray-100 rounded-md shadow-lg z-10"
          onClick={() => setIsOpen(false)} // Close menu on click
        >
          <Link
            href="#"
            className="flex items-center gap-2 px-4 py-2 hover:bg-green-500"
          >
            <UserIcon className="w-6 h-6 text-white" />
            <span>Compte</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 hover:bg-green-500"
          >
            <CogIcon className="w-6 h-6 text-gray-100" />
            <span>Paramètres</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 px-4 py-2 hover:bg-green-500"
          >
            <QuestionMarkCircleIcon className="w-6 h-6 text-white" />
            <span>Aide</span>
          </Link>
          <div className="border-t border-gray-200 my-2"></div>
          <Link
            href="#"
            className="flex items-center gap-2 px-4 py-2 hover:bg-green-500"
          >
            <SunIcon className="w-6 h-6 text-gray-100" />
            <span>Dark Mode</span>
          </Link>
          <div className="border-t border-gray-200 my-2"></div>
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 hover:bg-green-500"
          >
            <ArrowDownCircleIcon className="w-8 h-8 text-gray-100" />
            <span>Sign Out</span>
          </Link>
        </div>
      )}
    </div>
  );
}
