"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Moon, Sun, Search, Alert, Notification } from "@/assests";
import AlertModal from "./modals/AlertModal";
import NotificationModal from "./modals/NotificationModal";
import SearchModal from "./modals/SearchModal";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [showModals, setShowModals] = useState({
    alertModal: false,
    NotificationModal: false,
    searchModal: false,
  });
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <header className={`sticky top-0 z-10 w-full px-4 sm:px-6 md:px-10 py-3 transition-all duration-300 border-b border-[#404040] ${
      scrolled ? "shadow-2xl bg-[#262626]" : "bg-transparent"
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left side - Menu + Greeting */}
        <div className="flex items-start sm:items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="hover:bg-gray-100 rounded-md p-2 focus:outline-none sm:hidden"
          >
            <MenuIcon size={20} />
          </button>

          <div className="space-y-1">
            <h1 className="text-[#F5F5F5] font-medium text-xl sm:text-2xl">
              Hello John
            </h1>
            <p className="text-[#A3A3A3] text-sm sm:text-base">
              Thursday, February 15
            </p>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex flex-wrap items-center justify-start sm:justify-end gap-3">
          {/* Search */}
          <button
            className="flex items-center gap-2 bg-[#525252] border border-[#737373] rounded-full px-3 py-2"
            onClick={() =>
              setShowModals({ ...showModals, searchModal: true })
            }
          >
            <Image src={Search} alt="Search Icon" width={20} height={20} />
          </button>

          {/* Alert */}
          <button
            className="flex items-center gap-2 bg-[#525252] border border-[#737373] rounded-full px-3 py-2"
            onClick={() =>
              setShowModals({ ...showModals, alertModal: true })
            }
          >
            <Image src={Alert} alt="Alert Icon" width={20} height={20} />
            <p className="hidden sm:block text-sm text-white">Set alert</p>
          </button>

          {/* Notification */}
          <button
            className="flex items-center gap-2 bg-[#525252] border border-[#737373] rounded-full px-3 py-2"
            onClick={() =>
              setShowModals({ ...showModals, NotificationModal: true })
            }
          >
            <Image
              src={Notification}
              alt="Notification Icon"
              width={20}
              height={20}
            />
          </button>

          {/* Theme toggle */}
          <div
            onClick={toggleTheme}
            className="w-16 h-9 flex items-center gap-2 justify-between bg-[#525252] border border-[#737373] rounded-full px-1 cursor-pointer relative"
          >
            <Image src={Moon} alt="Moon" width={20} height={14} />
            <Image src={Sun} alt="Sun" width={20} height={14} />
            <div
              className={`absolute w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out
              ${isDarkMode ? "translate-x-0" : "translate-x-7"}`}
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showModals.alertModal && (
          <AlertModal
            onClose={() =>
              setShowModals({ ...showModals, alertModal: false })
            }
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showModals.NotificationModal && (
          <NotificationModal
            onClose={() =>
              setShowModals({ ...showModals, NotificationModal: false })
            }
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showModals.searchModal && (
          <SearchModal
            onClose={() =>
              setShowModals({ ...showModals, searchModal: false })
            }
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
