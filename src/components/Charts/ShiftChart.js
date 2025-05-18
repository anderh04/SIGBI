import React from 'react';

const ShiftChart = ({ loans, students }) => {
  const shiftData = loans.reduce((acc, loan) => {
    const student = students.find(s => s.id === loan.studentId);
    if (student) {
      acc[student.shift] = (acc[student.shift] || 0) + 1;
    }
    return acc;
  }, { Mañana: 0, Tarde: 0, Noche: 0 });

  const maxValue = Math.max(...Object.values(shiftData));

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">Préstamos por Turno</h3>
      <div className="grid grid-cols-3 gap-4 h-40 items-end">
        {Object.entries(shiftData).map(([shift, count]) => (
          <div key={shift} className="flex flex-col items-center">
            <div 
              className="w-full rounded-t bg-gradient-to-t from-blue-500 to-blue-300"
              style={{ height: `${(count/maxValue)*100}%` }}
            ></div>
            <span className="mt-2 text-sm">{shift}</span>
            <span className="text-xs font-medium">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShiftChart;

// DONE