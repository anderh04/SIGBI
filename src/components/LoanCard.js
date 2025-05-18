import React from 'react';

const LoanCard = ({ loan, books, students, onStatusChange }) => {
  const book = books.find(b => b.id === loan.bookId);
  const student = students.find(s => s.id === loan.studentId);

  const statusColors = {
    Entregado: 'bg-green-100 text-green-800',
    'No entregado': 'bg-yellow-100 text-yellow-800',
    Vencido: 'bg-red-100 text-red-800'
  };

  const handleStatusChange = (e) => {
    onStatusChange(loan.id, e.target.value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-gray-800">{book?.title}</h3>
          <p className="text-sm text-gray-600">Prestado a: {student?.name}</p>
        </div>
        <select
          value={loan.status}
          onChange={handleStatusChange}
          className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[loan.status]} border-none focus:ring-2 focus:ring-blue-500`}
        >
          <option value="Entregado">Entregado</option>
          <option value="No entregado">Pendiente</option>
          <option value="Vencido">Vencido</option>
        </select>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
        <div>
          <p className="text-gray-500">Préstamo:</p>
          <p>{loan.loanDate}</p>
        </div>
        <div>
          <p className="text-gray-500">{loan.status === 'Entregado' ? 'Devolución:' : 'Vence:'}</p>
          <p>{loan.status === 'Entregado' ? loan.returnDate : loan.dueDate}</p>
        </div>
      </div>
      {loan.status === 'Entregado' && loan.returnDate && (
        <div className="mt-2 text-xs text-gray-500">
          <p>Devuelto el: {loan.returnDate}</p>
        </div>
      )}
    </div>
  );
};

export default LoanCard;

// DONE