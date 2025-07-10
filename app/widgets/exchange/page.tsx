'use client';

import React, { useState } from 'react';
import { Exchange } from '@/assests';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const tabs = ["S", "M", "L"];
const rateTypes = ["Official rate", "Black market"];

const history = [
  { amount: "$10", date: "Feb 24, 2025" },
  { amount: "$10", date: "Feb 24, 2025" },
  { amount: "$10", date: "Feb 24, 2025" },
  { amount: "$10", date: "Feb 24, 2025" },
];

function ExchangeRate() {
  const [activeTab, setActiveTab] = useState("S");
  const [activeRateType, setActiveRateType] = useState("Official rate");

  return (
    <main className="flex flex-col gap-6 justify-between mt-10">
      {/* Main Card */}
      <section className="bg-[#404040] p-5 px-5 rounded-3xl max-w-md w-full">
        {/* Header */}
        <div>
          <h1 className="text-base font-medium text-[#F5F5F5]">Exchange rate</h1>
          <p className="text-[#D4D4D4] text-xs">Get updates on new prices of dollar</p>
        </div>

     <section className={`${activeTab === 'L' ? 'flex justify-between' : 'flex flex-col items-center'} mt-6`}>

        <div className={`relative group space-y-1 bg-[#171717] py-4 mt-5 rounded-xl cursor-pointer px-3 ${activeTab === 'L' ? 'w-[60%]' : 'w-full'}`}>
          <div className="flex gap-5 items-center">
            <p className="bg-[#262626] p-2 rounded-full flex items-center justify-center">
              <Image
                src={Exchange}
                alt="Exchange Rate Widget"
                className="rounded-3xl w-full"
                width={20}
                height={20}
              />
            </p>
            <p className="text-white">Exchange rate</p>
          </div>

          <div className="mt-10">
            <p className="text-[#A3A3A3] text-xs">Naira (₦)</p>
            <p className="text-3xl text-[#FAFAFA]">1544.71</p>
          </div>

          {/* Sticky Footer Tabs */}
          <div className="sticky bottom-0 bg-[#171717] px-4 py-3 border-t border-[#333] shadow-[0_-8px_15px_-5px_rgba(0,0,0,0.3)] mt-10">
            <div className="flex items-end gap-5 text-[#A3A3A3] text-[12px]">
              {rateTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveRateType(type)}
                  className={`cursor-pointer ${
                    activeRateType === type ? "text-white font-semibold underline" : "text-[#A3A3A3]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
        {activeTab !== "S" && (
          <motion.section
            key={`history-${activeTab}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={` p-2  max-w-md ${
              activeTab === 'M' ? "space-y-1 w-full" : "flex flex-wrap gap-1 w-[45%]"
            }`}
          >
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className=" text-white px-3 py-1 rounded-xl w-full sm:w-auto text-sm flex justify-between"
              >
                <span>{item.amount}</span>
                <span className="text-[#A3A3A3] ml-3 text-xs">{item.date}</span>
              </motion.div>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
      </section>





      <div className="flex gap-3 mt-4 justify-center">
          {tabs.map((tab) => (
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

export default ExchangeRate;

