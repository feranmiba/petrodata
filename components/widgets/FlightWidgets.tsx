// File: components/widgets/FlightsWidget.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Plane } from "lucide-react";

const data = [
  { date: "24 Jan", intl: 80000, dom: 30000 },
  { date: "31 Jan", intl: 100000, dom: 50000 },
  { date: "7 Feb", intl: 200000, dom: 120000 },
  { date: "14 Feb", intl: 90000, dom: 80000 },
];

export default function FlightsWidget() {
  return (
    <Card className="bg-[#121212] text-white">
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <Plane className="text-blue-500" />
            <span>284,774 Flights</span>
            <span className="text-green-500 text-sm">▲15% last week</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="date" stroke="#ccc" />
            <YAxis stroke="#ccc" tickFormatter={(v) => `${v / 1000}k`} />
            <Tooltip />
            <Bar dataKey="intl" stackId="a" fill="#00BFFF" />
            <Bar dataKey="dom" stackId="a" fill="#FFA500" />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex gap-4 mt-2">
          <span className="border-b-2 border-teal-400">International</span>
          <span>Domestic</span>
        </div>
      </CardContent>
    </Card>
  );
}
