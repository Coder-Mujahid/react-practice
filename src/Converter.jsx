import React, { useState } from 'react';
import { toRoman, toArabic } from './converters_formula';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

const Converter = () => {
  const [english, setEnglish] = useState('');
  const [roman, setRoman] = useState('');

  const handleEnglishChange = (e) => {
    setEnglish(e.target.value);
  };

  const handleRomanChange = (e) => {
    setRoman(e.target.value.toUpperCase());
  };

  const convertToRoman = () => {
    const value = parseInt(english, 10);
    if (isNaN(value) || value <= 0) {
      Swal.fire({
        title: 'Invalid Input',
        text: 'Please enter a valid number greater than 0',
        icon: 'error'
      });
      return;
    }
    const result = toRoman(value);
    Swal.fire({
      title: `Conversion Result  is ${result}`,
      text: `The numeral for ${english}`,
      icon: 'success'
    });
  };

  const convertToEnglish = () => {
    if (!roman.match(/^[MDCLXVI]+$/)) {
      Swal.fire({
        title: 'Invalid Input',
        text: 'Please enter a valid Roman numeral',
        icon: 'error'
      });
      return;
    }
    const result = toArabic(roman);
    Swal.fire({
      title: `Conversion Result is ${result}`,
      text: `The number for ${roman} `,
      icon: 'success'
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Roman Numeral Converter</h1>
        <p className="mb-8">Convert Roman numerals to numbers and convert numbers to Roman numerals.</p>
        
        <div className="mb-4">
          <label className="block text-gray-700">English to Roman</label>
          <input 
            type="number" 
            value={english} 
            onChange={handleEnglishChange} 
            className="mt-1 p-2 border rounded w-full" 
            placeholder="Enter a number"
          />
          <button 
            onClick={convertToRoman}
            className="mt-2 p-2 bg-blue-500 text-white rounded w-full"
          >
            Convert
          </button>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Roman to English</label>
          <input 
            type="text" 
            value={roman} 
            onChange={handleRomanChange} 
            className="mt-1 p-2 border rounded w-full" 
            placeholder="Enter a Roman numeral"
          />
          <button 
            onClick={convertToEnglish}
            className="mt-2 p-2 bg-blue-500 text-white rounded w-full"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default Converter;
