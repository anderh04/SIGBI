import React from 'react';
import Logo from './Logo';

const Navigation = ({ currentView, setCurrentView }) => {
  const views = [
    { id: 'books', label: 'Libros' },
    { id: 'students', label: 'Estudiantes' },
    { id: 'loans', label: 'Préstamos' },
    { id: 'reports', label: 'Reportes' }
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex items-center space-x-4">
            {views.map(view => (
              <button
                key={view.id}
                onClick={() => setCurrentView(view.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentView === view.id 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {view.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;