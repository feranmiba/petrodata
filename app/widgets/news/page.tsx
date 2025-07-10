'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import NewPicture from '@/assests/News widget.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { NewsData } from '@/assests/data';


const TABS = ["S", "M", "L"];

function News() {
  const [activeTab, setActiveTab] = useState("S");

  const getFilteredNews = () => {
    if (activeTab === "M") return NewsData.slice(0, 2);
    if (activeTab === "L") return NewsData;
    return [];
  };

  return (
    <main className='flex justify-between mt-10'>
      <section className="bg-[#404040] p-5 rounded-3xl w-[80%] mx-auto md:max-w-md">
        {/* Header */}
        <div>
          <h1 className="text-base font-medium text-[#F5F5F5]">News Widget</h1>
          <p className="text-[#D4D4D4] text-xs">Get the latest industry news and updates</p>
        </div>

       
        <AnimatePresence mode="wait">
  {activeTab === "S" && (
    <motion.div
      key="S"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="mt-5 relative group"
    >
      <div className="absolute -top-3 -left-3 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-[#00897B] p-3 rounded-full">
        <Plus size={16} color="white" />
      </div>

      <Image
        src={NewPicture}
        alt="News Widget"
        className="rounded-3xl w-full cursor-pointer"
      />
    </motion.div>
  )}

  {(activeTab === "M" || activeTab === "L") && (
    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="relative group space-y-1 bg-black/50 py-1 mt-5 rounded-xl cursor-pointer"
    >
      <div className="absolute -top-3 -left-3 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-[#00897B] p-3 rounded-full">
        <Plus size={16} color="white" />
      </div>

      {getFilteredNews().map((item) => (
        <motion.div
          key={item.title}
          className="border-b-[0.1px] border-[#36353A] p-3 relative overflow-hidden"
        >
          <div className="flex flex-row justify-between gap-4">
            <div className="flex-1">
              <p className="text-[#A3A3A3] text-[4px] font-medium mb-1 flex justify-between items-center">
                {item.brand}

                <span>
                    {item.tags.map((tag, index) => (
                        <span
                        key={index}
                        className={`${
                            tag === "PMS" ? "bg-[#B42318]" :
                            tag === "AGO" ? "bg-[#B54708]" :
                            "bg-[#00796B]"
                          } text-white px-1 py-0.5 rounded-full text-[4px] ml-1`}
                            >
                        {tag}
                        </span>
                    ))}
                </span>
              
              </p>
              <h2 className="text-white font-semibold text-[8px] leading-snug">{item.title.length > 100 ? `${item.title.slice(0, 135)}...`: `${item.title}`}</h2>
              <p className="text-[#E0E0E0] text-[6px] mt-3">
                {item.description.length > 150
                  ? `${item.description.slice(0, 210)}...`
                  : item.description}
              </p>
            </div>
            <div className="w-14 md:w-14 flex-shrink-0">
              <Image src={item.img} alt={item.title} className="w-full object-cover" />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>

<div className="flex gap-3 mt-4 justify-center">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
                activeTab === tab ? "bg-white text-black" : "bg-[#262626] text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>



      </section>
    </main>
  );
}

export default News;

