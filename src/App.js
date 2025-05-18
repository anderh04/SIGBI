import React, { useState } from 'react';
import Navigation from './components/Navigation';
import BooksSection from './components/BooksSection';
import StudentsSection from './components/StudentsSection';
import LoansSection from './components/LoansSection';
import ReportsSection from './components/ReportsSection';
import Footer from './components/Footer';

const App = () => {
  const [currentView, setCurrentView] = useState('books');

  const renderView = () => {
    switch(currentView) {
      case 'books':
        return <BooksSection />;
      case 'students':
        return <StudentsSection />;
      case 'loans':
        return <LoansSection />;
      case 'reports':
        return <ReportsSection />;
      default:
        return <BooksSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;

// DONE