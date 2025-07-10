
import React from 'react';
import Image from 'next/image';
import { File } from '@/assests';
import Document from '@/assests/document.svg?url';

const reports = [
  { name: 'PMS - Aug 12-17', type: 'PMS' },
  { name: 'DPK - Aug 12-17', type: 'DPK' },
  { name: 'AGO - Aug 12-17', type: 'AGO' },
  { name: 'ICE - Aug 12-17', type: 'ICE' },
];

export const ReportsSection: React.FC = () => {
  return (
    <div className="bg-[#171717] rounded-2xl h-full  w-full md:max-w-sm p-5">
      <div className="flex items-center gap-2 mb-4">
      <p className='bg-[#E0F2F1] rounded-full px-2 py-2 flex items-center text-white justify-center '>
      <Image src={File} alt="File Icon" width={24} height={24} className="inline-block" />
        </p>
        <span className="text-white font-semibold">Reports - week 31</span>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {reports.map((report, index) => (
          <div key={index} className="rounded-lg p-3 flex flex-col items-center justify-center  cursor-pointer">
            <div className="w-12 h-16 rounded mb-2 flex items-center justify-center">
            <Image src={Document} alt="File Icon" width={250} height={250} className="inline-block w-full" />

            </div>
            <span className="text-white text-xs text-center">{report.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};