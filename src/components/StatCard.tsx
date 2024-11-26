import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  change: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, title, value, change }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="bg-green-50 p-3 rounded-lg">
          <Icon className="h-6 w-6 text-green-600" />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <p className="text-2xl font-semibold text-gray-800 mt-1">{value}</p>
        <p className="text-sm text-gray-500 mt-2">{change}</p>
      </div>
    </div>
  );
}

export default StatCard;