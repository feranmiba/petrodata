'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Warehouse, Positive } from '@/assests';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const companies = [
  {
    name: "NIPCO",
    location: "Lagos",
    price: "₦714.26",
    change: "+0.37",
    trend: "up" as const,
    chartData: [20, 25, 30, 35, 32, 38, 42, 45, 48, 52, 55, 58],
  },
  {
    name: "Oando PLC",
    location: "Rivers",
    price: "₦714.26",
    change: "+0.37",
    trend: "up" as const,
    chartData: [25, 30, 28, 35, 40, 38, 42, 45, 50, 48, 52, 55],
  },
  {
    name: "MRS Oil Nigeria P...",
    location: "Oyo",
    price: "₦714.26",
    change: "+0.37",
    trend: "up" as const,
    chartData: [18, 22, 26, 30, 28, 32, 35, 38, 42, 40, 45, 48],
  },
];

const TABS = ['S', 'M', 'L'];

const commodityTabs = [
    { id: 'pms', label: 'PMS', active: true },
    { id: 'ago', label: 'AGO', active: false },
    { id: 'dpk', label: 'DPK', active: false },
    { id: 'ice', label: 'ICE', active: false },
    { id: 'lpg', label: 'LPG', active: false }
  ];
  

function Depot() {
  const [activeTab, setActiveTab] = useState('S');
  const [commodityTab, setCommodityTab] = useState('pms'); // Default to 'pms'

  const strokeColor = '#4ADE80'; // green
  const stopOpacity = 0.3;
  const referenceY = 40;

  const filteredCompanies =
    activeTab === 'S'
      ? companies.slice(0, 1)
      : activeTab === 'M'
      ? companies.slice(0, 2)
      : companies;

  return (
    <main className="flex justify-start items-start mt-10">
      <section className="bg-[#404040] p-5 rounded-3xl max-w-lg w-full">
        {/* Header */}
        <div>
          <h1 className="text-base font-medium text-[#F5F5F5]">Depot widget</h1>
          <p className="text-[#D4D4D4] text-xs">Monitor depot prices on a weekly basis</p>
        </div>

        {/* Scrollable Cards */}
        <AnimatePresence mode="wait">
            <div className='group relative'>
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.02 }}
    className={`mt-5 bg-[#171717] p-7 rounded-2xl  ${
      activeTab === 'S'
        ? 'space-y-4'
        : 'overflow-y-auto max-h-[320px]  px-3 py-2 space-y-4 ' +
          (activeTab === 'L' ? 'custom-scrollbar' : activeTab === "M" ? "custom-scrollbar" : "")
    }`}
  >

<div className="absolute -top-3 -left-3 opacity-0 group-hover:opacity-100 transition-opacity z-50 bg-[#00897B] p-3 rounded-full">
        <Plus size={16} color="white" />
      </div>

<div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <Image
                src={Warehouse}
                alt="Depot Icon"
                width={28}
                height={28}
                className="rounded-full bg-[#E0F2F1] p-1"
              />
              <p className="text-sm text-white">Depot</p>
            </div>
          </div>
    {filteredCompanies.map((comp, index) => {
      const chartData = comp.chartData.map((value, i) => ({
        value,
        index: i,
      }));

      return (
        <motion.section
          key={index}
          className={` px-3 py-3 transition-transform   ${
            activeTab === 'S' ? 'bg-[#171717]' : 'border-b border-[#36353A]'
          }`}
        >


        

          {/* Chart */}
          <div className="h-16 w-full mb-2 flex items-center gap-6">
          {activeTab !== 'S' && ( 
            <div className='flex-1/2'>
                  <p className="text-[14px] font-medium text-white flex items-center">
            <Image src={Positive} alt="Trend Icon" width={6} height={6} className="inline-block mr-1" />
            {comp.name}</p> 
            <p className='text-xs'>{comp.location}</p>

            </div>
            )}

            <ResponsiveContainer width="100%" height="100%" className={``}>
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

            {activeTab !== 'S' && ( 
                <div className='ml-4'>
                       <p className="text-white font-semibold mb-3 ">{comp.price}</p>
                       <p className='text-xs text-[#12B76A]'>{comp.change}</p>
                    </div>
             )}

          </div>

          {/* Price */}
        {activeTab === 'S' && ( 
            <div className='flex justify-between'>
            <p className="text-white font-semibold mb-3 text-3xl">{comp.price}</p>
            <p className='text-xs text-[#12B76A]'>{comp.change}</p>
            </div>
            )}

          {/* Show commodity tabs only inside card for S */}
          {activeTab === 'S' && (
            <div className="flex gap-1 items-end rounded-lg p-1">
              {commodityTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setCommodityTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    commodityTab === tab.id
                      ? 'text-white border-t-2 border-[#404040]'
                      : 'text-gray-400'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </motion.section>
      );
    })}

    {/* Bottom sticky commodity tabs for M and L */}
    {activeTab !== 'S' && (
      <div className="sticky bottom-0 bg-[#171717] px-4 py-3 border-t border-[#333] shadow-[0_-8px_15px_-5px_rgba(0,0,0,0.3)]">
        <div className="flex gap-1 items-end rounded-lg p-1">
          {commodityTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCommodityTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                commodityTab === tab.id
                  ? 'text-white border-t-2 border-[#404040]'
                  : 'text-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    )}
  </motion.div>
  </div>
</AnimatePresence>


        {/* Tabs */}
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
  );
}

export default Depot;

