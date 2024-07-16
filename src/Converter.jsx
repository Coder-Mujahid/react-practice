import React, { useState } from 'react';
import { toRoman, toArabic } from './converters_formula';

const Converter = () => {
  const [english, setEnglish] = useState('');
  const [roman, setRoman] = useState('');
  const [convertedRoman, setConvertedRoman] = useState('');
  const [convertedEnglish, setConvertedEnglish] = useState('');

  const handleEnglishChange = (e) => {
    setEnglish(e.target.value);
  };

  const handleRomanChange = (e) => {
    setRoman(e.target.value.toUpperCase());
  };

  const convertToRoman = () => {
    setConvertedRoman(toRoman(parseInt(english, 10)));
  };

  const convertToEnglish = () => {
    setConvertedEnglish(toArabic(roman));
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
          <div className="mt-2 p-2 border rounded bg-gray-100 text-center">{convertedRoman}</div>
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
          <div className="mt-2 p-2 border rounded bg-gray-100 text-center">{convertedEnglish}</div>
        </div>
      </div>
    </div>
  );
}

export default Converter;
