import React, { useState } from 'react';
import LoanCard from './LoanCard';
import loansData from '../mock/loans';
import booksData from '../mock/books';
import studentsData from '../mock/students';
import { LoanIcon } from './icons';

const LoansSection = () => {
  const [loans, setLoans] = useState(loansData);
  const [filter, setFilter] = useState('all');

  const filteredLoans = filter === 'all' 
    ? loans 
    : loans.filter(loan => loan.status === filter);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <LoanIcon className="mr-2 text-blue-600" />
          Gestión de Préstamos
        </h2>
        <select 
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Todos</option>
          <option value="Entregado">Entregados</option>
          <option value="No entregado">Pendientes</option>
          <option value="Vencido">Vencidos</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredLoans.map(loan => (
          <LoanCard 
            key={loan.id} 
            loan={loan} 
            books={booksData} 
            students={studentsData} 
            onStatusChange={(id, status) => {
              setLoans(loans.map(l => 
                l.id === id 
                  ? { ...l, status, returnDate: status === 'Entregado' ? new Date().toISOString().split('T')[0] : l.returnDate }
                  : l
              ));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoansSection;