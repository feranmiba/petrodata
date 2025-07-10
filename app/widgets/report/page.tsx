'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Reports } from '@/assests/data';
import { File } from '@/assests';

const TABS = ['S', 'M', 'L'];

function Report() {
  const [activeTab, setActiveTab] = useState('S');

  const getFilteredReports = () => {
    if (activeTab === 'S') return Reports.slice(0, 1);
    if (activeTab === 'M') return Reports.slice(0, 2);
    return Reports; 
  };

  return (
    <main className='flex justify-between mt-10'>
      <section className="bg-[#404040] p-5 px-10 rounded-3xl max-w-md w-full">
        {/* Header */}
        <div>
          <h1 className="text-base font-medium text-[#F5F5F5]">Report widget</h1>
          <p className="text-[#D4D4D4] text-xs">Get comprehensive reports & insights</p>
        </div>

       

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-6 space-y-2 rounded-2xl px-2 bg-[#171717] max-w-full mx-auto h-[40vh] md:h-[30vh] overflow-y-auto custom-scrollbar"
          >
            {getFilteredReports().map((report) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className=" py-4 rounded-xl"
              >
                <div className='flex gap-2 items-center justify-start mb-3 px-10'>
                  <Image
                    src={File}
                    alt="Report Icon"
                    width={24}
                    height={24}
                    className="inline-block mb-2"
                  />
                <h2 className="text-white text-xs font-semibold mb-3">{report.title}</h2>

                </div>

                <div
                  className={`gap-2 px-5 ${
                    activeTab === 'S'
                      ? 'grid grid-cols-2'
                      : activeTab === 'M'
                      ? 'flex overflow-x-auto flex-wrap no-scrollbar '
                      : 'flex'
                  }`}
                >
                  {report.docs.map((doc) => (
                    <motion.div
                      key={doc.id}
                      whileHover={{ scale: 1.03 }}
                      className={`flex flex-col items-center justify-center mb-2 ${
                        activeTab === 'M' ? 'w-[45%] bg-[#333333] rounded-sm py-2 px-2 flex justify-start items-start' : ""}`}
                    >
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        className="w-14 h-10 object-contain"
                      />
                      <p className="text-[#A3A3A3] text-[12px] text-center mt-2">{doc.name}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3 mt-4 justify-center">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
                activeTab === tab ? 'bg-white text-black' : 'bg-[#262626] text-white'
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

export default Report;

