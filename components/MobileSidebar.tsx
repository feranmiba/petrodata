"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import Logo from "@/assests/logo.svg";

interface SidebarItem {
  icon: StaticImageData | string;
  text: string;
  href: string;
}

interface MobileSidebarProps {
  sidebarItems: SidebarItem[];
  pathname: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  sidebarItems,
  pathname,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 z-50 h-full w-64 bg-[#171717] shadow-lg flex flex-col"
          >
            <div className="flex items-center justify-between px-4 py-5 border-b border-[#404040]">
              <div className="flex items-center gap-2">
                <Image src={Logo} alt="Logo" className="w-6 h-6" />
                <span className="text-[#A3A3A3] text-lg font-medium">Petrodata</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#A3A3A3] hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col p-4 gap-2 overflow-y-auto">
              {sidebarItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-4 px-3 py-3 rounded-md ${
                    pathname === item.href
                      ? "text-[#009688] bg-[#262626]"
                      : "text-[#D4D4D4] hover:bg-[#262626]"
                  }`}
                >
                  <Image src={item.icon} alt={item.text} className="w-5 h-5" />
                  <span className="text-sm">{item.text}</span>
                </Link>
              ))}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;
