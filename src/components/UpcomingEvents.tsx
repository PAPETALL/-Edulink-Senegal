import React from 'react';
import { Calendar } from 'lucide-react';

const UpcomingEvents = () => {
  const events = [
    {
      title: 'Examen de Mathématiques',
      date: '15 Mars 2024',
      time: '10:00',
      type: 'exam'
    },
    {
      title: 'Projet de SVT',
      date: '18 Mars 2024',
      time: '23:59',
      type: 'assignment'
    },
    {
      title: 'Réunion Parents-Professeurs',
      date: '20 Mars 2024',
      time: '14:00',
      type: 'meeting'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Événements à venir</h2>
        <Calendar className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0">
              <div className={`w-3 h-3 rounded-full ${
                event.type === 'exam' ? 'bg-red-400' :
                event.type === 'assignment' ? 'bg-yellow-400' :
                'bg-green-400'
              }`}></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{event.title}</p>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="text-sm text-gray-500">{event.time}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full py-2 px-4 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
        Voir tous les événements
      </button>
    </div>
  );
}

export default UpcomingEvents;