// CGPACalculator.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CGPACalculator = () => {
  const [semesterGPAs, setSemesterGPAs] = useState(Array(8).fill(''));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [result, setResult] = useState('');

  const calculateWeightedCGPA = () => {
    const weights = [5, 5, 5, 15, 15, 20, 25, 10];
    const totalWeightedGPAs = semesterGPAs.reduce((acc, gpa, index) => acc + (parseFloat(gpa) || 0) * weights[index], 0);
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    const cgpa = (totalWeightedGPAs / totalWeight).toFixed(2);
    return isNaN(cgpa) ? 'N/A' : cgpa;
  };

  const mapCGPAToLetterGrade = (cgpa) => {
    if (cgpa >= 3.75) return 'A+';
    if (cgpa >= 3.5) return 'A';
    // Add more conditions for other letter grades...
    return 'F';
  };

  const openModal = () => {
    const cgpa = calculateWeightedCGPA();
    setResult(mapCGPAToLetterGrade(cgpa));
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
          onClick={openModal}
        >
          Calculate CGPA
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal bg-black"
        overlayClassName="Overlay"
      >
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Result</h2>
          <p>Your CGPA: {result}</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CGPACalculator;
