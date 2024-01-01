// Calculator.jsx

import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C',
  ];

  return (
    <div className="calculator max-w-md mx-auto mt-10 p-4 bg-gray-200 rounded-lg">
      <input
        type="text"
        className="calculator-screen w-full mb-4 p-2 text-xl text-right"
        value={input}
        readOnly
      />
      <div className="calculator-buttons grid grid-cols-4 gap-2">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(button)}
            className="calculator-button bg-green-500 text-white p-2 rounded"
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
