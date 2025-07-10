import React from 'react';
import { AreaChart, Area, ResponsiveContainer, ReferenceLine } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CommodityData {
  symbol: string;
  name: string;
  price: string;
  change: string;
  trend: 'up' | 'down';
  chartData: number[];
}

const commodities: CommodityData[] = [
  {
    symbol: 'PMS',
    name: 'Premium Motor Spirit',
    price: '₦714.26',
    change: '+0.37',
    trend: 'up',
    chartData: [12, 15, 13, 18, 25, 22, 28, 26, 29, 27, 30, 28]
  },
  {
    symbol: 'AGO',
    name: 'Automotive Gas Oil',
    price: '₦1249.06',
    change: '-9.01',
    trend: 'down',
    chartData: [25, 22, 18, 15, 12, 16, 14, 11, 13, 10, 12, 9]
  },
  {
    symbol: 'ICE',
    name: 'ICE Brent Crude',
    price: '$75.00',
    change: '0.68',
    trend: 'up',
    chartData: [10, 12, 15, 18, 22, 25, 23, 26, 28, 25, 27, 26]
  },
  {
    symbol: 'DPK',
    name: 'Dual Purpose Kerosene',
    price: '₦1088.92',
    change: '-50.90',
    trend: 'down',
    chartData: [20, 18, 22, 19, 16, 18, 15, 17, 14, 16, 13, 15]
  }
];

const CommodityRow: React.FC<{ commodity: CommodityData }> = ({ commodity }) => {
  const data = commodity.chartData.map((value, index) => ({ value, index }));

  const isNegative = commodity.change.trim().startsWith('-');

  const fillColor = isNegative ? '#ef4444' : '#10b981'; 
  const stopOpacity = isNegative ? 0.1 : 0.3;
  const referenceY = isNegative ? 5 : 25; 

  const getChangeColor = () => (isNegative ? 'text-red-400' : 'text-green-400');

  const getTrendIcon = () =>
    isNegative ? (
      <TrendingDown size={16} className="text-red-400" />
    ) : (
      <TrendingUp size={16} className="text-green-400" />
    );

  return (
    <div className="border-b border-gray-700 py-2 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <div className="flex items-center gap-3">
          {getTrendIcon()}
          <div>
            <div className="text-white font-semibold text-sm">{commodity.symbol}</div>
            <div className="text-gray-400 text-xs">{commodity.name}</div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-5">
        <div className="h-16 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id={`areaGradient-${commodity.symbol}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={fillColor} stopOpacity={stopOpacity} />
                  <stop offset="100%" stopColor={fillColor} stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={fillColor}
                strokeWidth={2}
                fill={`url(#areaGradient-${commodity.symbol})`}
              />
              <ReferenceLine
                y={referenceY}
                stroke={fillColor}
                strokeDasharray="5 5"
                strokeWidth={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="text-right flex-1">
        <div className="text-white font-bold text-sm mb-1">{commodity.price}</div>
        <div className={`text-sm font-medium ${getChangeColor()}`}>
          {commodity.change}
        </div>
      </div>
    </div>
  );
};


export const ReportsWidgets: React.FC = () => {
    return (
      <div className="bg-[#171717] rounded-3xl p-6">
        <div className="space-y-0">
          {commodities.map((commodity, index) => (
            <CommodityRow key={index} commodity={commodity} />
          ))}
        </div>
      </div>
    );
  };
  