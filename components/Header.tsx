"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import {  Moon, Sun, Search, Alert, Notification } from "@/assests";
import AlertModal from "./modals/AlertModal";
import NotificationModal from "./modals/NotificationModal";
import SearchModal from './modals/SearchModal';


interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  // const [showNotification, setShowNotification] = useState(false);
  const [showModals, setShowModals] = useState({
    alertModal: false,
    NotificationModal: false,
    searchModal: false,
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };


  const handleSearch = (query: string) => {
    console.log("Search for:", query);
  };
  return (
    <header className="border-gray-200 sticky right-0 top-0 z-50 h-20 w-[98%]  mx-2 px-10 mt-3 ">
      <div className="flex h-full items-center justify-between pr-4 border-b pb-20 pt-10 borde-[1px] border-[#404040]">
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button
            onClick={toggleSidebar}
            className="hover:bg-gray-100 rounded-md p-2 focus:outline-none lg:hidden"
          >
            <MenuIcon size={20} />
          </button>

          <div className="p-6">
            <div className="space-y-2">
              <h1 className="text-[#F5F5F5] font-medium text-2xl">Hello John</h1>
              <p className="text-[#A3A3A3] text-[16px]">Thursday, February 15</p>
            </div>


          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#525252] border border-[#737373] rounded-full px-2 py-2 cursor-pointer" onClick={() => setShowModals({ ...showModals, searchModal: true })}>
            <Image src={Search} alt="Search Icon" width={20} height={20} />
          </div>


          <div className="flex items-center gap-2 bg-[#525252] border border-[#737373] rounded-full px-2 py-2 cursor-pointer" onClick={() => setShowModals({ ...showModals, alertModal: true })}>
            <Image src={Alert} alt="Search Icon" width={20} height={20} />
            <p>Set alert</p>
          </div>

          <div className="flex items-center gap-2 bg-[#525252] border border-[#737373] rounded-full px-2 py-2 cursor-pointer" onClick={() => setShowModals({ ...showModals, NotificationModal: true })}>
            <Image src={Notification} alt="Search Icon" width={20} height={20} />
          </div>

          {/* Toggle from darkmode to light mode  */}
          <div
  onClick={toggleTheme}
  className="w-16 h-9 flex items-center gap-2 justify-between bg-[#525252] border border-[#737373] rounded-full px-1 cursor-pointer relative"
>
  <Image src={Moon} alt="Moon" width={20} height={14} className="z-10" />
  <Image src={Sun} alt="Sun" width={20} height={14} className="z-10" />

  <div
    className={`absolute w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out
      ${isDarkMode ? "translate-x-0" : "translate-x-7"}`}
  />
</div>



        </div>

    
      </div>

      <AnimatePresence>
        {showModals.alertModal && (
          <AlertModal
            onClose={() => setShowModals({ ...showModals, alertModal: false })}
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
            onClose={() => setShowModals({ ...showModals, searchModal: false })}
          />
        )}
      </AnimatePresence>


      <AnimatePresence>
        {/* {showNotification && (
          <Notification onClose={() => setShowNotification(false)} />
        )} */}
      </AnimatePresence>
    </header>
  );
};

export default Header;