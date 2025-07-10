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
    <main className='flex justify-between mt-10'>
      <section className="bg-[#404040] p-5 rounded-3xl w-[90%] mx-auto md:max-w-lg">
        {/* Header */}
        <div>
          <h1 className="text-base font-medium text-[#F5F5F5]">Retail product</h1>
          <p className="text-[#D4D4D4] text-xs">View price quotes and track performance of a product throughout the week</p>
        </div>



        <AnimatePresence mode="wait">
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

              {filteredCompanies.map((comp, index) => {
                  const chartData = comp.chartData.map((value, i) => ({
                    value,
                    index: i,
                  }));
            
                  return (
                    <motion.section
                    key={index}
                    className={`px-3 py-3 transition-transform rounded-2xl bg-[#171717] mt-5 h-[40vh] ${
                      activeTab === 'S' ? '' : 'border-b border-[#36353A]'
                    }`}
                  >
                  

                   {activeTab === 'S' || activeTab === 'M' && ( 
                        <div className='flex-1/2'>
                              <p className="text-[14px] font-medium text-white flex items-center">
                        <Image src={Positive} alt="Trend Icon" width={6} height={6} className="inline-block mr-1" />
                        {comp.name}</p> 
                        <p className='text-xs text-[#A3A3A3]'>{comp.location}</p>
            
                        </div>
                        )}

                    {activeTab === 'L' && ( 
                            <div className='ml-4 flex justify-end flex-col items-end'>
                                   <p className="text-white font-semibold mb-3 ">{comp.price}</p>
                                   <p className='text-xs text-[#12B76A]'>{comp.change}</p>
                                </div>
                         )}
                    
            
                      {/* Chart */}
                      <div className="h-52 w-full mb-2 flex items-center gap-6">

                      {activeTab === 'M' && ( 
                            <div className='ml-4'>
                                   <p className="text-white font-semibold mb-3 ">{comp.price}</p>
                                   <p className='text-xs text-[#12B76A]'>{comp.change}</p>
                                </div>
                         )}
                        <ResponsiveContainer width="100%" height="100%" className={`h-full`}>
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
            
                      {/* Price */}
                    {activeTab === 'S' && ( 
                        <div className='flex flex-col justify-center items-center'>
                        <p className="text-white font-semibold mb-3 text-4xl">{comp.price}</p>
                        </div>
                        )}
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