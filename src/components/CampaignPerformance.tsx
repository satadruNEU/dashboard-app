import { motion } from 'framer-motion';
import { Users, TrendingUp, DollarSign, MessageSquare, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

type MetricColor = 'blue' | 'green' | 'purple' | 'pink';

interface MetricCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  trend: 'up' | 'down';
  trendValue: string;
  color: MetricColor;
  delay?: number;
}

const colorMap = {
  blue: {
    bg: 'bg-blue-500',
    text: 'text-blue-500',
    hex: '#3B82F6'
  },
  green: {
    bg: 'bg-green-500',
    text: 'text-green-500',
    hex: '#22C55E'
  },
  purple: {
    bg: 'bg-purple-500',
    text: 'text-purple-500',
    hex: '#A855F7'
  },
  pink: {
    bg: 'bg-pink-500',
    text: 'text-pink-500',
    hex: '#EC4899'
  }
};

function MetricCard({ icon: Icon, label, value, trend, trendValue, color, delay = 0 }: MetricCardProps) {
  const colorConfig = colorMap[color];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-[#141415] border border-opacity-10 border-white rounded-md p-4 hover:border-opacity-20 hover:border-white transition-colors"
      style={{
        backgroundColor: '#141415',
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-1.5 rounded-md bg-opacity-10 ${colorConfig.bg}`}>
            <Icon className={`w-5 h-5 ${colorConfig.text}`} strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-xs text-opacity-60 text-white">{label}</p>
            <p className="text-lg font-medium text-white">{value}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full ${
            trend === 'up' ? 'bg-opacity-10 bg-green-500 text-green-400' : 'bg-opacity-10 bg-red-500 text-red-400'
          }`}>
            {trend === 'up' ? '+' : '-'}{trendValue}
          </span>
        </div>
      </div>
      <div className="mt-3 h-12 relative">
        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`gradient-${color}`} gradientTransform="rotate(90)">
              <stop offset="0%" stopColor={colorConfig.hex} stopOpacity="0.3" />
              <stop offset="100%" stopColor={colorConfig.hex} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={color === 'blue' ? "M0,35 L10,32 L20,33 L30,28 L40,30 L50,25 L60,27 L70,22 L80,24 L90,20 L100,18 L100,40 L0,40 Z" :
               color === 'green' ? "M0,30 L10,28 L20,25 L30,22 L40,20 L50,18 L60,15 L70,12 L80,10 L90,8 L100,5 L100,40 L0,40 Z" :
               color === 'purple' ? "M0,25 L10,22 L20,20 L30,18 L40,15 L50,12 L60,10 L70,8 L80,5 L90,3 L100,0 L100,40 L0,40 Z" :
               "M0,20 L10,18 L20,15 L30,12 L40,10 L50,8 L60,5 L70,3 L80,2 L90,1 L100,0 L100,40 L0,40 Z"}
            fill={`url(#gradient-${color})`}
            stroke="none"
          />
          <path
            d={color === 'blue' ? "M0,35 L10,32 L20,33 L30,28 L40,30 L50,25 L60,27 L70,22 L80,24 L90,20 L100,18" :
               color === 'green' ? "M0,30 L10,28 L20,25 L30,22 L40,20 L50,18 L60,15 L70,12 L80,10 L90,8 L100,5" :
               color === 'purple' ? "M0,25 L10,22 L20,20 L30,18 L40,15 L50,12 L60,10 L70,8 L80,5 L90,3 L100,0" :
               "M0,20 L10,18 L20,15 L30,12 L40,10 L50,8 L60,5 L70,3 L80,2 L90,1 L100,0"}
            fill="none"
            stroke={colorConfig.hex}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}

export default function CampaignPerformance() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Last 30 Days');

  const periods = [
    { label: 'Last 7 Days', value: 'Last 7 Days' },
    { label: 'Last 30 Days', value: 'Last 30 Days' },
    { label: 'Lifetime', value: 'Lifetime' }
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xs font-medium uppercase text-opacity-60 text-white">Campaign Performance</h2>
          <p className="text-sm text-opacity-40 text-white mt-1">Overview of your campaign metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1.5 px-2 py-1 text-xs rounded-md bg-opacity-5 bg-white text-opacity-60 text-white hover:bg-opacity-20 hover:text-white transition-colors"
            >
              {selectedPeriod}
              <ChevronDown size={12} className="text-opacity-60" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-1 w-24 rounded-md bg-[#141415] border border-opacity-10 border-white shadow-lg z-10"
              style={{backgroundColor: '#141415'}}>
                {periods.map((period) => (
                  <button
                    key={period.value}
                    onClick={() => {
                      setSelectedPeriod(period.value);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full px-2 py-1.5 text-xs text-left ${
                      selectedPeriod === period.value 
                        ? 'text-white bg-opacity-10 bg-white' 
                        : 'text-opacity-60 text-white hover:text-white hover:bg-opacity-5 hover:bg-white'
                    }`}
                  >
                    {period.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="text-xs text-opacity-60 text-white hover:text-white flex items-center gap-1.5">
            View Analytics
            <ArrowRight size={10} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          icon={Users}
          label="Total Reach"
          value="2.4M"
          trend="up"
          trendValue="12%"
          color="blue"
        />
        <MetricCard
          icon={TrendingUp}
          label="Engagement Rate"
          value="6.8%"
          trend="up"
          trendValue="2%"
          color="green"
          delay={0.1}
        />
        <MetricCard
          icon={DollarSign}
          label="Estimated ROI"
          value="112%"
          trend="up"
          trendValue="24%"
          color="purple"
          delay={0.2}
        />
        <MetricCard
          icon={MessageSquare}
          label="Avg. Engagement"
          value="4.2K"
          trend="up"
          trendValue="18%"
          color="pink"
          delay={0.3}
        />
      </div>
    </section>
  );
} 