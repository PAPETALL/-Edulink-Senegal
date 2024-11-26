import React from 'react';
import { Activity } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      user: {
        name: 'Aminata Diallo',
        avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      action: 'a terminé',
      subject: 'Introduction au Calcul',
      time: 'il y a 2 heures',
      score: '19/20'
    },
    {
      user: {
        name: 'Moussa Sow',
        avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      action: 'a soumis',
      subject: 'Devoir de Physique',
      time: 'il y a 4 heures'
    },
    {
      user: {
        name: 'Fatou Ndiaye',
        avatar: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      action: 'a commencé',
      subject: 'Littérature Africaine',
      time: 'il y a 6 heures'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Activités Récentes</h2>
        <Activity className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img
              className="h-10 w-10 rounded-full"
              src={activity.user.avatar}
              alt={activity.user.name}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                <span className="font-medium">{activity.user.name}</span>
                {' '}
                <span className="text-gray-500">{activity.action}</span>
                {' '}
                <span className="font-medium">{activity.subject}</span>
              </p>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
            {activity.score && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {activity.score}
              </span>
            )}
          </div>
        ))}
      </div>
      <button className="mt-6 w-full py-2 px-4 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
        Voir toutes les activités
      </button>
    </div>
  );
}

export default RecentActivity;