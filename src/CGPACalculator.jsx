// CGPACalculator.jsx
import React, { useState } from 'react';

const CGPACalculator = () => {
  const [semesterGPAs, setSemesterGPAs] = useState(Array(8).fill(''));

  const calculateWeightedCGPA = () => {
    const weights = [5, 5, 5, 15, 15, 20, 25, 10];
    const totalWeightedGPAs = semesterGPAs.reduce((acc, gpa, index) => acc + (parseFloat(gpa) || 0) * weights[index], 0);
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    const cgpa = (totalWeightedGPAs / totalWeight).toFixed(2);
    return isNaN(cgpa) ? 'N/A' : cgpa;
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-lg max-w-md p-8">
        <h2 className="text-2xl font-semibold mb-4">CGPA Calculator</h2>

        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Semester {index + 1}:
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="4"
              className="border rounded-md p-2 w-24 focus:outline-none focus:border-blue-500"
              placeholder="CGPA (max 4.00)"
              value={semesterGPAs[index]}
              onChange={(e) => {
                const newGPAs = [...semesterGPAs];
                newGPAs[index] = e.target.value;
                setSemesterGPAs(newGPAs);
              }}
            />
          </div>
        ))}

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          onClick={() => alert(`Your CGPA is: ${calculateWeightedCGPA()}`)}
        >
          Calculate CGPA
        </button>
      </div>
    </div>
  );
};

export default CGPACalculator;
