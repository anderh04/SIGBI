import React from 'react';

const GenderChart = ({ students }) => {
  const genderData = students.reduce((acc, student) => {
    acc[student.gender] = (acc[student.gender] || 0) + 1;
    return acc;
  }, {});

  const total = students.length;
  const colors = {
    'Femenino': 'bg-pink-500',
    'Masculino': 'bg-blue-500',
    'Otro': 'bg-purple-500'
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">Distribución por Género</h3>
      <div className="flex items-center justify-center">
        <div className="w-40 h-40 relative">
          {Object.entries(genderData).map(([gender, count], index, arr) => {
            const percentage = (count / total) * 100;
            const offset = arr.slice(0, index).reduce((sum, [_, currCount]) => {
              return sum + (currCount / total) * 100;
            }, 0);
            
            return (
              <div
                key={gender}
                className="absolute inset-0"
                style={{
                  background: `conic-gradient(${colors[gender]} ${offset}% ${offset + percentage}%, transparent ${offset + percentage}% 100%)`,
                  borderRadius: '50%'
                }}
              ></div>
            );
          })}
          <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
            <span className="text-lg font-bold">
              {total}
              <span className="block text-xs font-normal">Estudiantes</span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {Object.entries(genderData).map(([gender, count]) => (
          <div key={gender} className="flex items-center">
            <div className={`w-3 h-3 rounded-full ${colors[gender]} mr-2`}></div>
            <span className="text-sm">{gender}: {count} (${Math.round((count/total)*100)}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenderChart;