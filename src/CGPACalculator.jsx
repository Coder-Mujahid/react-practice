// CGPACalculator.jsx
import React, { useState } from 'react';

const CGPACalculator = () => {
  const [semesterCredits, setSemesterCredits] = useState(Array(8).fill(0));
  const [semesterGrades, setSemesterGrades] = useState(Array(8).fill(0));

  const calculateCGPA = () => {
    const totalCredits = semesterCredits.reduce((acc, credits) => acc + credits, 0);
    const weightedSum = semesterGrades.reduce((acc, grade, index) => acc + (grade / 100) * semesterCredits[index], 0);
    const cgpa = (weightedSum / totalCredits).toFixed(2);
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
            <div className="flex items-center space-x-4 mt-2">
              <input
                type="number"
                min="0"
                className="border rounded-md p-2 w-16 focus:outline-none focus:border-blue-500"
                placeholder="Credits"
                value={semesterCredits[index]}
                onChange={(e) => {
                  const newCredits = [...semesterCredits];
                  newCredits[index] = parseInt(e.target.value, 10) || 0;
                  setSemesterCredits(newCredits);
                }}
              />
              <input
                type="number"
                min="0"
                max="100"
                className="border rounded-md p-2 w-16 focus:outline-none focus:border-blue-500"
                placeholder="Grade %"
                value={semesterGrades[index]}
                onChange={(e) => {
                  const newGrades = [...semesterGrades];
                  newGrades[index] = parseInt(e.target.value, 10) || 0;
                  setSemesterGrades(newGrades);
                }}
              />
            </div>
          </div>
        ))}

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          onClick={() => alert(`Your CGPA is: ${calculateCGPA()}`)}
        >
          Calculate CGPA
        </button>
      </div>
    </div>
  );
};

export default CGPACalculator;
