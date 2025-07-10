"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FlightStatsWidgets } from '@/components/widgets/FlightStatsWidgets';
import AircraftUtilizationWidget from '@/components/widgets/AircraftUtilizationWidgets';
import { FuelConsumptionWidgets } from '@/components/widgets/FuelCosumptionWidgets';
import { ReportsWidgets } from '@/components/widgets/ReportsWidgets';
import { ReportsSection } from '@/components/widgets/ReportDocumentWidgets';

export default function WidgetPage() {
  const router = useRouter();

  return (
    <section className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <ReportsWidgets />
        <FuelConsumptionWidgets />
      </div>

      <div className="flex justify-between mt-10 gap-3 items-stretch flex-wrap xl:flex-nowrap">
        <ReportsSection />
        <AircraftUtilizationWidget />
        <FlightStatsWidgets />
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => router.push('/widgets')}
          className="bg-[#525252] border-[#737373] border-2 px-5 py-2 rounded-full cursor-pointer"
        >
          Edit Widget
        </button>
      </div>
    </section>
  );
}
