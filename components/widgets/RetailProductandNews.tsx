'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { News, Positive } from '@/assests';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { NewsData } from '@/assests/data';


const companies = [
    {
      name: "PMS",
      location: "Premium Motor Spirit",
      price: "₦714.26",
      change: "+0.37",
      trend: "up" as const,
      chartData: [20, 25, 30, 35, 32, 38, 42, 45, 48, 52, 55, 58],
    },
  ];
  
  const TABS = ['S', 'M', 'L'];


  

function RetailProductandNews() {
     const [activeTab, setActiveTab] = useState('S');
      const [commodityTab, setCommodityTab] = useState('pms'); 



        const getFilteredNews = () => {
          if (activeTab === "S") return NewsData.slice(0, 1);
          if (activeTab === "M") return NewsData.slice(0, 2);
          if (activeTab === "L") return NewsData.slice(0, 4);

          return [];
        };
    
      const strokeColor = '#4ADE80'; 
      const stopOpacity = 0.3;
      const referenceY = 40;
    
      const filteredCompanies =
        activeTab === 'S'
          ? companies.slice(0, 1)
          : activeTab === 'M'
          ? companies.slice(0, 2)
          : companies;



  return (
    <main className='flex justify-between mt-10'>
      <section className="bg-[#404040] p-5 rounded-3xl w-[90%] mx-auto md:max-w-lg">
        {/* Header */}
        <div>
          <h1 className="text-base font-medium text-[#F5F5F5]">Retail product & news</h1>
          <p className="text-[#D4D4D4] text-xs">View price quotes, track performance and latest news of a product throughout the week</p>
        </div>



        <AnimatePresence mode="wait">
  <motion.div
    key="S"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="mt-5 relative group cursor-pointer"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileHover={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="absolute -top-3 -left-3 z-10 bg-[#00897B] p-3 rounded-full opacity-0 group-hover:opacity-100"
    >
      <Plus size={16} color="white" />
    </motion.div>

    {filteredCompanies.map((comp, index) => {
      const chartData = comp.chartData.map((value, i) => ({
        value,
        index: i,
      }));

      return (
        <motion.section
          key={index}
          whileHover={{
            scale: 0.98,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          className={`px-4 py-4 transition-transform rounded-2xl bg-[#171717] h-[42vh] overflow-hidden flex flex-col justify-between gap-2 ${
            activeTab === 'S' ? '' : 'border-b border-[#36353A]'
          }`}
        >
          {/* Top row: name + price */}
          <div className="flex justify-between items-center">
            <p className="text-[14px] font-medium text-white flex items-center gap-1">
              <Image
                src={Positive}
                alt="Trend Icon"
                width={6}
                height={6}
                className="inline-block"
              />
              {comp.name}
            </p>
            <p className="text-xs text-[#A3A3A3]">{comp.price}</p>
          </div>

          {/* Chart + Price change */}
          <div className="h-52 w-full flex items-center gap-6 overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient
                    id={`areaGradient-${index}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor={strokeColor}
                      stopOpacity={stopOpacity}
                    />
                    <stop
                      offset="100%"
                      stopColor={strokeColor}
                      stopOpacity={0.05}
                    />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={strokeColor}
                  strokeWidth={2}
                  fill={`url(#areaGradient-${index})`}
                />
                <ReferenceLine
                  y={referenceY}
                  stroke={strokeColor}
                  strokeDasharray="4 4"
                  strokeWidth={1}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* News items */}
          <div className="flex justify-center items-center flex-wrap gap-2 overflow-hidden">
            {getFilteredNews().map((item, index) => (
              <div
                className="flex flex-col w-full gap-1"
                key={index}
              >
                <div className="rounded-xl flex gap-2 items-center">
                  <Image
                    src={News}
                    alt="news"
                    height={15}
                    width={15}
                  />
                  <p className="text-xs text-white truncate w-[90%]">
                    {item.brand.slice(0, 150)}...
                  </p>
                </div>
                <p className="text-[13px] font-medium text-white line-clamp-2">
                  {item.title.slice(0, 80)}...
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      );
    })}
  </motion.div>
</AnimatePresence>



       <div className="flex gap-3 mt-6 justify-center">
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
  )
}

export default RetailProductandNews