import React from 'react';

const StatusChart = ({ loans }) => {
  const statusData = loans.reduce((acc, loan) => {
    acc[loan.status] = (acc[loan.status] || 0) + 1;
    return acc;
  }, {});

  const statusColors = {
    'Entregado': 'bg-green-500',
    'No entregado': 'bg-yellow-500',
    'Vencido': 'bg-red-500'
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">Estado de Préstamos</h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.entries(statusData).map(([status, count]) => (
          <div key={status} className="flex flex-col items-center">
            <div className={`w-16 h-16 rounded-full ${statusColors[status]} flex items-center justify-center text-white font-bold`}>
              {count}
            </div>
            <span className="mt-2 text-sm">{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusChart;

// DONE