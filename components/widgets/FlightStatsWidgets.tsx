"use client";

import React, { useState } from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Plane } from "lucide-react";
import { Messsage } from "@/assests";
import Image from "next/image";

const flightData = [
  { name: "24 Jan", international: 300, domestic: 250 },
  { name: "31 Jan", international: 450, domestic: 380 },
  { name: "7 Feb", international: 520, domestic: 420 },
  { name: "14 Feb", international: 600, domestic: 480 },
];

const airportData = [
  { name: "Murtala Muhammed I...", flights: "12,489 flights" },
  { name: "Nnamdi Azikiwe Inter...", flights: "934,483 flights" },
  { name: "Mallam Aminu Kano I...", flights: "10,722 flights" },
  { name: "Port Harcourt Interna...", flights: "9,823 flights" },
  { name: "Akanu Ibiam Internati...", flights: "489 flights" },
  { name: "Murtala Mohamm...", flights: "89 flights" },
];

const chartConfig = {
  international: {
    label: "International",
    color: "hsl(180, 100%, 25%)",
    dotColor: "bg-teal-600",
  },
  domestic: {
    label: "Domestic",
    color: "hsl(39, 100%, 50%)",
    dotColor: "bg-yellow-500",
  },
};

export const FlightStatsWidgets: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"international" | "domestic">(
    "international"
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#171717] rounded-3xl w-full  overflow-hidden">
      {/* Left Side - Chart and Tab */}
      <div className="p-6 pb-0">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <Plane className="text-white" size={24} />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-white text-3xl font-bold">284,774</span>
              <span className="text-gray-400 text-lg">Flights</span>
              <span className="text-green-400 text-sm flex items-center gap-1">
                ▲ 15% <span className="text-gray-400">last week</span>
              </span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-64 z-0 relative">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={flightData} barCategoryGap="40%">
                <CartesianGrid stroke="#2e2e2e" strokeDasharray="4 4" />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9ca3af" }}
                />
                <YAxis
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#9ca3af" }}
                  tickFormatter={(value) => `${value / 1000}k`}
                  domain={[0, 600]}
                  ticks={[100, 200, 300, 400, 500, 600]}
                />
                <Tooltip content={<ChartTooltipContent />} cursor={{ fill: "transparent" }} />
                <Bar
                  dataKey="international"
                  fill="hsl(180, 100%, 25%)"
                  radius={[6, 6, 0, 0]}
                  animationDuration={1000}
                />
                <Bar
                  dataKey="domestic"
                  fill="hsl(39, 100%, 50%)"
                  radius={[6, 6, 0, 0]}
                  animationDuration={1000}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        {/* Tabs */}
        <div className="flex border-t border-gray-700 mt-6 z-10 relative">
          {(["international", "domestic"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 py-3 text-sm font-medium text-center transition-colors flex items-center justify-center gap-2 ${
                activeTab === key
                  ? "text-white border-t-2 border-blue-500"
                  : "text-gray-400"
              }`}
            >
              <span className={`w-3 h-3 ${chartConfig[key].dotColor} rounded-sm`}></span>
              {chartConfig[key].label}
            </button>
          ))}
        </div>
      </div>

      {/* Right Side - List of Airports */}
      <div className="bg-[#00897B] p-6 flex flex-col justify-between relative border border-[#00897B]">
        <div className="space-y-4">
          {airportData.map((airport, index) => (
            <div key={index} className="flex justify-between items-center py-1">
              <span className="text-white text-sm font-medium">{airport.name}</span>
              <span className="text-gray-300 text-sm">{airport.flights}</span>
            </div>
          ))}
        </div>

        <button className="absolute bottom-8 mt-6 bg-teal-600 text-white py-3 px-4 rounded-full transition-colors font-medium cursor-pointer">
          <Image
            src={Messsage}
            alt="Message Icon"
            width={20}
            height={20}
            className="inline-block mr-2"
          />
          Make special request
        </button>
      </div>
    </div>
  );
};
