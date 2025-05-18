import React from 'react';

const CareerChart = ({ loans, students }) => {
  const careerLoans = loans.reduce((acc, loan) => {
    const student = students.find(s => s.id === loan.studentId);
    if (student) {
      acc[student.career] = (acc[student.career] || 0) + 1;
    }
    return acc;
  }, {});

  const sortedCareers = Object.entries(careerLoans)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const maxValue = Math.max(...sortedCareers.map(c => c[1]));

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">Top 5 Carreras con más Préstamos</h3>
      <div className="space-y-3">
        {sortedCareers.map(([career, count]) => (
          <div key={career} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="truncate">{career}</span>
              <span className="font-medium">{count}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                style={{ width: `${(count/maxValue)*100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerChart;