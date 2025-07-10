"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ProductIcon,
  Flight,
  Warehouse,
  Exchange,
  NewsPaper,
  File,
} from "@/assests";
import { Menu, X } from "lucide-react";
import { Search } from "@/assests";

const links = [
  { name: "Product Retail Price", href: "/widgets", icon: ProductIcon },
  { name: "Flight Widget", href: "/widgets/flight", icon: Flight },
  { name: "Depot Widget", href: "/widgets/depot", icon: Warehouse },
  { name: "News Widget", href: "/widgets/news", icon: NewsPaper },
  { name: "Report Widget", href: "/widgets/report", icon: File },
  { name: "Exchange Rate", href: "/widgets/exchange", icon: Exchange },
];

export default function WidgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#1A1A1A] text-white relative">
      {/* Sidebar for large screens */}
      <aside className="w-64 p-6 border-r border-[#333] hidden lg:block">
        <div className=" rounded-2xl bg-[#404040] flex items-center gap-3 py-2 px-3 mb-6">
          <p>
          <Image src={Search} alt="Search Icon" width={20} height={20} className="inline-block" />

          </p>
          <input
          type="text"
          placeholder="Search..."
          className="w-full text-sm text-white outline-none"
        />
        </div>
      

        <nav className="space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#333] transition ${
                pathname === link.href ? "bg-[#333]" : ""
              }`}
            >
              <Image src={link.icon} alt={`${link.name} Icon`} width={18} height={18} />
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#1A1A1A] p-6 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Widgets</h2>
          <button onClick={() => setSidebarOpen(false)} className="cursor-pointer">
            <X size={24} />
          </button>
        </div>

        <div className=" rounded-2xl bg-[#404040] flex items-center gap-3 py-2 px-3 mb-6">
          <p>
          <Image src={Search} alt="Search Icon" width={20} height={20} className="inline-block" />

          </p>
          <input
          type="text"
          placeholder="Search..."
          className="w-full text-sm text-white outline-none"
        />
        </div>

        <nav className="space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#333] transition ${
                pathname === link.href ? "bg-[#333]" : ""
              }`}
            >
              <Image src={link.icon} alt={`${link.name} Icon`} width={18} height={18} />
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="absolute top-4 left-4 z-40 lg:hidden text-white cursor-pointer"
      >
        <Menu size={24} />
      </button>

      {/* Overlay when sidebar is open on mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 lg:hidden"
        ></div>
      )}

      {/* Main content */}
      <main className="flex-1 p-6 w-full">{children}</main>
    </div>
  );
}
