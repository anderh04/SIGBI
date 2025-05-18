import React, { useState } from 'react';
import { BookIcon, LoanIcon } from './icons';

const StudentCard = ({ student, loans, books }) => {
  const [showLoans, setShowLoans] = useState(false);
  const studentLoans = loans.filter(loan => loan.studentId === student.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="p-4 flex items-center">
        <img 
          src={student.photo} 
          alt={student.name}
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-200"
        />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800">{student.name}</h3>
          <p className="text-sm text-gray-600">{student.idNumber}</p>
          <div className="mt-1 flex flex-wrap gap-1">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
              {student.career}
            </span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
              {student.shift}
            </span>
            {studentLoans.length > 0 && (
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                {studentLoans.length} préstamo{studentLoans.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>
        {studentLoans.length > 0 && (
          <button 
            onClick={() => setShowLoans(!showLoans)}
            className="p-2 text-blue-600 hover:text-blue-800"
          >
            <LoanIcon />
          </button>
        )}
      </div>

      {showLoans && studentLoans.length > 0 && (
        <div className="border-t border-gray-100 p-4 bg-gray-50">
          <h4 className="font-medium text-gray-700 mb-2 flex items-center">
            <BookIcon className="mr-1" />
            Libros Prestados:
          </h4>
          <ul className="space-y-2">
            {studentLoans.map(loan => {
              const book = books.find(b => b.id === loan.bookId);
              return (
                <li key={loan.id} className="flex items-start">
                  <div className="flex-1">
                    <p className="font-medium">{book?.title}</p>
                    <div className="text-xs text-gray-500 space-x-2">
                      <span>Préstamo: {loan.loanDate}</span>
                      <span>Vence: {loan.dueDate}</span>
                      {loan.returnDate && <span>Devuelto: {loan.returnDate}</span>}
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    loan.status === 'Entregado' ? 'bg-green-100 text-green-800' :
                    loan.status === 'Vencido' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {loan.status}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentCard;