import React from 'react';
import booksData from '../mock/books';
import studentsData from '../mock/students';
import loansData from '../mock/loans';
import GenderChart from './Charts/GenderChart';
import CareerChart from './Charts/CareerChart';
import ShiftChart from './Charts/ShiftChart';
import CategoryChart from './Charts/CategoryChart';
import StatusChart from './Charts/StatusChart';
import { ReportIcon } from './icons';

const ReportsSection = () => {
  const totalBooks = booksData.length;
  const totalStudents = studentsData.length;
  const totalLoans = loansData.length;
  const returnedLoans = loansData.filter(loan => loan.status === 'Entregado').length;
  const overdueLoans = loansData.filter(loan => loan.status === 'Vencido').length;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center">
        <ReportIcon className="mr-2 text-blue-600" />
        Reportes Gerenciales
      </h2>
      
      {/* ... (resto del código existente de ReportsSection) */}
    </div>
  );
};

export default ReportsSection;

// DONE