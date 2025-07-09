import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Logo from '@/assests/logo.svg';

interface SidebarItem {
  icon: StaticImageData | string;
  text: string;
  href: string;
}

interface DesktopSidebarProps {
  sidebarItems: SidebarItem[];
  sidebarExpanded: boolean;
  toggleSidebar: () => void;
  pathname: string;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  sidebarItems,
  sidebarExpanded,
  toggleSidebar,
  pathname,
}) => {
  return (
    <motion.aside
      initial={false}
      animate={{ width: sidebarExpanded ? "220px" : "100px" }}
      className="fixed left-0 top-0 z-10 hidden h-screen flex-col bg-[#171717] w-20 lg:flex"
    >
      <button
        onClick={toggleSidebar}
        className="border-[#404040] hover:bg-[#404040] cursor-pointer absolute -right-4 top-20 flex size-8 items-center justify-center rounded-full border bg-[#262626] "
      >
        {sidebarExpanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
      </button>

      <div className="flex h-full flex-col justify-between">
        {/* Logo + Text */}
        <div className="gap-3 flex items-center justify-center px-2 py-6">
          <Image src={Logo} alt="Logo" />
          <motion.span
            initial={false}
            animate={{
              opacity: sidebarExpanded ? 1 : 0,
              width: sidebarExpanded ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="text-[#A3A3A3] text-2xl font-medium whitespace-nowrap overflow-hidden"
          >
            Petrodata
          </motion.span>
        </div>

        {/* Sidebar Items */}
        <div className="flex flex-col items-start justify-center flex-grow overflow-y-auto p-2">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center py-4 px-3 rounded-md w-full hover:bg-[#FFF5DD] ${
                pathname === item.href
                  ? "text-gray-900 border-l-4 border-l-main bg-[#FFF5DD]"
                  : "text-gray-600"
              }`}
            >
              <Image src={item.icon} alt={item.text} className="w-5 h-5" />
              <motion.span
                initial={false}
                animate={{
                  opacity: sidebarExpanded ? 1 : 0,
                  width: sidebarExpanded ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="ml-4 whitespace-nowrap overflow-hidden"
              >
                {item.text}
              </motion.span>
            </Link>
          ))}
        </div>
      </div>
    </motion.aside>
  );
};

export default DesktopSidebar;
