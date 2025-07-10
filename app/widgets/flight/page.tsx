"use client";

import React, { useState } from "react";
import {
  ChartContainer,
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
import { AnimatePresence, motion } from "framer-motion";

const TABS = ["S", "M", "L"];

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

const transition = { duration: 0.5, ease: "easeInOut" };

function Flight() {
  const [activeTab, setActiveTab] = useState("S");
   const [activeTabs, setActiveTabs] = useState<"international" | "domestic">(
      "international"
    );

  const Chart = (
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
            fill={chartConfig.international.color}
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="domestic"
            fill={chartConfig.domestic.color}
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );

  const Stats = (
    <div className="flex items-center gap-3 mb-6 mt-4">
      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
        <Plane className="text-white" size={24} />
      </div>
      <div>
        <div className="flex items-baseline gap-2">
          <span className="text-white text-xl font-bold">284,774</span>
          <span className="text-gray-400 text-lg">Flights</span>
          <span className="text-green-400 text-sm flex items-center gap-1">
          </span>
        </div>
      </div>
    </div>
  );

  const renderAirportList = () => (
    <div className="mt-4 space-y-2">
      {airportData.map((airport, i) => (
        <div
          key={i}
          className="flex justify-between text-white py-2"
        >
          <p className="text-[12px]">{airport.name}</p>
          <p className="text-[12px] text-gray-300">{airport.flights}</p>
        </div>
      ))}
    </div>
  );

  return (
    <main className="flex justify-between mt-10">
      <section className="bg-[#404040] p-5 rounded-3xl max-w-xl w-full">
        {/* Header */}
        <div>
          <h1 className="text-base font-medium text-[#F5F5F5]">Flight widget</h1>
          <p className="text-[#D4D4D4] text-xs">
            View the weekly number of flights, categorized by international and
            domestic routes
          </p>
        </div>

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          {activeTab === "S" && (
            <motion.div
              key="tab-s"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}
              className="relative z-0 bg-[#171717] px-4 py-5 rounded-lg h-[58vh] mt-5"
            >
              {Stats}
              {Chart}
              <div className="flex border-t border-gray-700 mt-2 z-10 relative">
          {(["international", "domestic"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTabs(key)}
              className={`flex-1 py-3 text-sm font-medium text-center transition-colors flex items-center justify-center gap-2 ${
                activeTabs === key
                  ? "text-white border-t-2 border-blue-500"
                  : "text-gray-400"
              }`}
            >
              <span className={`w-3 h-3 ${chartConfig[key].dotColor} rounded-sm`}></span>
              {chartConfig[key].label}
            </button>
          ))}
        </div>
            </motion.div>
          )}

          {activeTab === "M" && (
            <motion.div
              key="tab-m"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}
              exit={{ opacity: 0, x: 40, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}
              className="flex gap-4 bg-[#404040] shadow-2xl pr-3  rounded-xl mt-5"
            >
              <div className="w-[70%] bg-[#171717] px-3 py-4 rounded-l-lg shadow-2xl">
                {Stats}
                <div className="h-48">{Chart}
                <div className="flex border-t border-gray-700 mt-2 z-10 relative">
          {(["international", "domestic"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTabs(key)}
              className={`flex-1 py-3 text-sm font-medium text-center transition-colors flex items-center justify-center gap-2 ${
                activeTabs === key
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
              </div>
              <div className="w-1/2 py-2">{renderAirportList()}</div>
            </motion.div>
          )}

          {activeTab === "L" && (
            <motion.div
              key="tab-l"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}
              exit={{ opacity: 0, y: -30, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}
              className="bg-[#404040] shadow-2xl pb-3 py-2 rounded-b-xl mt-5"
            >
              <div className="bg-[#171717] h-[58vh] py-3 px-4 rounded-t-xl">
              {Stats}
              <div className="h-64">{Chart}
              <div className="flex border-t border-gray-700 mt-1 z-10 relative">
          {(["international", "domestic"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTabs(key)}
              className={`flex-1 py-3 text-sm font-medium text-center transition-colors flex items-center justify-center gap-2 ${
                activeTabs === key
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
              </div>
              <div className="px-4">
              {renderAirportList()}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tabs */}
        <div className="flex gap-3 mt-8 justify-center">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full text-sm cursor-pointer ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "bg-[#262626] text-white"
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

export default Flight;


