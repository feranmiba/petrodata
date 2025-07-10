
import React, { useState } from 'react';
import { CompanyCard } from './CompanyCard';
import Image from 'next/image';
import { Warehouse } from '@/assests';

const companies = [

  {
    name: "NIPCO",
    location: "Lagos", 
    price: "₦714.26",
    change: "+0.37",
    trend: "up" as const,
    chartData: [20, 25, 30, 35, 32, 38, 42, 45, 48, 52, 55, 58]
  },
  {
    name: "Oando PLC",
    location: "Rivers",
    price: "₦714.26", 
    change: "+0.37",
    trend: "up" as const,
    chartData: [25, 30, 28, 35, 40, 38, 42, 45, 50, 48, 52, 55]
  },
  {
    name: "MRS Oil Nigeria P...",
    location: "Oyo",
    price: "₦714.26",
    change: "+0.37", 
    trend: "up" as const,
    chartData: [18, 22, 26, 30, 28, 32, 35, 38, 42, 40, 45, 48]
  }
];

const commodityTabs = [
  { id: 'pms', label: 'PMS', active: true },
  { id: 'ago', label: 'AGO', active: false },
  { id: 'dpk', label: 'DPK', active: false },
  { id: 'ice', label: 'ICE', active: false },
  { id: 'lpg', label: 'LPG', active: false }
];

export const FuelConsumptionWidgets: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pms');

  return (
    <div className="bg-[#171717] rounded-3xl  p-4 overflow-y-scroll custom-scrollbar h-[50vh]">
        <div className='flex  items-center mb-2 gap-2'>

            <p className='bg-[#E0F2F1] rounded-full px-2 py-2 flex items-center text-white justify-center '>
                <Image src={Warehouse} alt="Warehouse Icon" width={24} height={24} className="inline-block" />
            </p>
            <p>Depot</p>

        </div>




      <div className="space-y-0 mb-1">
        {companies.map((company, index) => (
          <CompanyCard
            key={index}
            name={company.name}
            location={company.location}
            price={company.price}
            change={company.change}
            trend={company.trend}
            chartData={company.chartData}
          />
        ))}
      </div>
      
      <div className="sticky bottom-0 bg-[#171717]  px-4 py-3 border-t border-[#333] shadow-[0_-8px_15px_-5px_rgba(0,0,0,0.3)]">

      <div className="flex gap-1 items-end rounded-lg p-1">
        {commodityTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium  transition-colors cursor-pointer ${
              activeTab === tab.id
                ? ' text-white border-t-2 border-[#404040] '
                : 'text-gray-400 '
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
};