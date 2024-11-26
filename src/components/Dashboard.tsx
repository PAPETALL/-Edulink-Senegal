import React from 'react';
import { Book, Users, Calendar, MessageCircle, BarChart3, Bell } from 'lucide-react';
import StatCard from './StatCard';
import UpcomingEvents from './UpcomingEvents';
import RecentActivity from './RecentActivity';

const Dashboard = () => {
  const stats = [
    { icon: Book, title: 'Cours Actifs', value: '12', change: '+2 cette semaine' },
    { icon: Users, title: 'Étudiants', value: '1,234', change: '+15% vs mois dernier' },
    { icon: BarChart3, title: 'Note Moyenne', value: '16/20', change: '+2 points' },
    { icon: MessageCircle, title: 'Messages', value: '48', change: '12 non lus' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Bienvenue, Fatou!</h1>
          <p className="text-gray-600 mt-1">Voici vos activités du jour</p>
        </div>
        <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div>
          <UpcomingEvents />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;