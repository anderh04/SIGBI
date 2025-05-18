import React from 'react';

const CategoryChart = ({ books, loans }) => {
  const categoryData = books.reduce((acc, book) => {
    acc[book.category] = (acc[book.category] || 0) + 
      loans.filter(loan => loan.bookId === book.id).length;
    return acc;
  }, {});

  const sortedCategories = Object.entries(categoryData)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">Top 5 Categorías más solicitadas</h3>
      <div className="space-y-3">
        {sortedCategories.map(([category, count]) => (
          <div key={category} className="flex items-center">
            <div className="w-24">
              <span className="text-sm truncate">{category}</span>
            </div>
            <div className="flex-1 ml-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full bg-indigo-500"
                  style={{ width: `${(count/Math.max(...sortedCategories.map(c => c[1])))*100}%` }}
                ></div>
              </div>
            </div>
            <span className="ml-2 text-sm font-medium">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryChart;