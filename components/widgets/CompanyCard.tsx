import React from 'react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { TrendingDown, Minus } from 'lucide-react';
import { Positive } from '@/assests';
import Image from 'next/image';

interface CompanyCardProps {
  name: string;
  location: string;
  price: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  chartData: number[];
  icon?: string;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  location,
  price,
  change,
  trend,
  chartData,
  icon
}) => {
  const data = chartData.map((value, index) => ({ value, index }));

  const isNegative = change.trim().startsWith('-');
  const strokeColor = isNegative ? '#ef4444' : '#10b981'; // red or green
  const stopOpacity = isNegative ? 0.1 : 0.3;
  const referenceY = isNegative ? 5 : 25;

  const trendIcon = {
    up: <Image src={Positive} alt="Positive Trend" width={16} height={16} />,
    down: <TrendingDown size={16} className="text-red-400" />,
    neutral: <Minus size={16} className="text-gray-400" />,
  };

  const trendColor = {
    up: 'text-green-400',
    down: 'text-red-400',
    neutral: 'text-gray-400',
  };

  return (
    <div className="border-b border-[#36353A] p-4 w-full">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Icon & Info */}
        <div className="flex items-center gap-3 min-w-[120px]">
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold">
            {icon ?? trendIcon[trend]}
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">{name}</h3>
            <p className="text-gray-400 text-xs">{location}</p>
          </div>
        </div>

        {/* Center: Chart */}
        <div className="h-16 flex-1 mx-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id={`areaGradient-${name}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={strokeColor} stopOpacity={stopOpacity} />
                  <stop offset="100%" stopColor={strokeColor} stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={strokeColor}
                strokeWidth={2}
                fill={`url(#areaGradient-${name})`}
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

        {/* Right: Price & Change */}
        <div className="text-right min-w-[80px]">
          <p className="text-white font-bold text-xs">{price}</p>
          <p className={`text-xs ${trendColor[trend]}`}>{change}</p>
        </div>
      </div>
    </div>
  );
};

