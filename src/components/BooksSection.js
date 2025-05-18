import React, { useState } from 'react';
import BookCard from './BookCard';
import booksData from '../mock/books';
import { BookIcon } from './icons';

const BooksSection = () => {
  const [books, setBooks] = useState(booksData);
  const [filter, setFilter] = useState('all');

  const filteredBooks = filter === 'all' 
    ? books 
    : books.filter(book => book.status === filter);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <BookIcon className="mr-2 text-blue-600" />
          Gestión de Libros
        </h2>
        <select 
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="Disponible">Disponibles</option>
          <option value="Prestado">Prestados</option>
          <option value="Vencido">Vencidos</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksSection;