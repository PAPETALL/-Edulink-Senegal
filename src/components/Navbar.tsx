import React from 'react';
import { BookOpen } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-800">EduLink Sénégal</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Tableau de bord</a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Cours</a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Calendrier</a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Messages</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Connexion
            </button>
            <div className="relative">
              <img
                className="h-10 w-10 rounded-full border-2 border-green-600"
                src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                alt="Profile"
              />
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;