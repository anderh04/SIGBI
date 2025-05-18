import React from 'react';

const BookCard = ({ book }) => {
  const statusColors = {
    Disponible: 'bg-green-100 text-green-800',
    Prestado: 'bg-yellow-100 text-yellow-800',
    Vencido: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={book.image} 
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">{book.title}</h3>
        <p className="text-gray-600 text-sm">{book.author}</p>
        <div className="mt-2 flex items-center">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[book.status]}`}>
            {book.status}
          </span>
          <span className="ml-2 text-xs text-gray-500">{book.category}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;