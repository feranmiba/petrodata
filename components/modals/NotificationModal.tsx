'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { mockNotifications, Notification } from '@/assests/data'; 
import { Close } from '@/assests';
import Image from 'next/image';

interface NotificationProps {
  onClose: () => void;
}

const tabOptions = ["All", "Comments", "Mentioned"];

const NotificationModal: React.FC<NotificationProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredNotifications = activeTab === "All"
    ? mockNotifications
    : mockNotifications.filter((item) => item.type === activeTab);

  return (
    <>
      <div
        className="fixed inset-0 z-0 bg-black/30"
        onClick={onClose}
      />

<AnimatePresence>
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 100 }}
    transition={{ duration: 0.4 }}
    className="absolute top-4 right-1 md:-right-4 z-50 w-[400px] h-[100vh] bg-[#171717] rounded-lg shadow-lg flex flex-col"
  >

    <div className="sticky top-0 z-10 bg-[#171717] p-4 border-b border-[#333]">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-base font-semibold">Your notifications</h1>
        <div onClick={onClose} className="cursor-pointer">
          <Image src={Close} alt="close" width={18} height={18} />
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full mt-3 flex justify-between text-sm border border-[#525252] dark:text-white outline-none rounded-xl">
        {tabOptions.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full py-2 px-2 cursor-pointer rounded-lg ${
              activeTab === tab ? 'bg-[#525252] text-white' : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>

  
    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 custom-scrollbar">
    {filteredNotifications.map((notif: Notification, index: number) => (
  <div key={notif.id} className="flex items-start gap-1 text-white relative mt-8">
    {/* Icon and Vertical Line */}
    <div className="relative flex flex-col items-center w-[25%] ">
      {/* Image */}
      {notif.icon && (
        <Image
          src={notif.icon}
          alt={notif.title}
          width={54}
          height={54}
          className="z-10"
        />
      )}

      {/* Vertical Line */}
      {index !== filteredNotifications.length - 1 && (
        <div className="absolute top-[52px] left-1/2 transform -translate-x-1/2 h-[13vh] w-[1px] bg-[#404040]"></div>
      )}
    </div>

    <div className='w-full'>
      <h1 className='font-medium text-[#FAFAFA]'>{notif.title}   <span className='text-[#A3A3A3] text-sm'>{notif.time}</span> </h1>
      <p className="text-[#00897B]">
      {notif.subtitle?.split(/(commented in|mentioned you|to the la’organisation|invited)/gi).map((part, i) => (
        <span key={i} className={["commented in", "mentioned you", "to the la’organisation", "invited"].includes(part.toLowerCase()) ? "text-white" : ""}>
          {part}
        </span>
      ))}
    </p>

    <p className="text-[#A3A3A3] mt-2">
      {notif.message?.split(/(@john|to the la’organisation)/gi).map((part, i) => (
        <span key={i} className={["@john", "to the la’organisation"].includes(part.toLowerCase()) ? "text-white" : ""}>
          {part}
        </span>
      ))}
    </p>


    </div>

  </div>
))}



      {filteredNotifications.length === 0 && (
        <p className="text-sm text-center text-gray-400">No notifications</p>
      )}
    </div>

    {/* Sticky Footer */}
    <div className="sticky bottom-0 bg-[#171717] px-4 py-3 border-t border-[#333] shadow-[0_-8px_15px_-5px_rgba(0,0,0,0.3)]">
      <div className="flex items-end justify-between">
        <button className="bg-[#525252] border-[#525252] border rounded-full w-[45%] py-2 cursor-pointer text-white" onClick={onClose}>
          Close
        </button>
        <button
          type="submit"
          className="bg-[#00897B] border-[#525252] border rounded-full w-[45%] py-2 cursor-pointer text-white"
        >
          Mark All as Read
        </button>
      </div>
    </div>
  </motion.div>
</AnimatePresence>

    </>
  );
};

export default NotificationModal;
