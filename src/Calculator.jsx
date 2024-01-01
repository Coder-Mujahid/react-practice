import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="max-w-xs mx-auto my-8 p-4 bg-gray-200 rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 mb-2 text-right border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={input}
          readOnly
        />
        <div className="flex justify-between">
          <button
            className="w-1/4 p-2 mr-1 bg-gray-300 rounded-md hover:bg-gray-400"
            onClick={() => handleButtonClick('7')}
          >
            7
          </button>
          <button
            className="w-1/4 p-2 mx-1 bg-gray-300 rounded-md hover:bg-gray-400"
            onClick={() => handleButtonClick('8')}
          >
            8
          </button>
          <button
            className="w-1/4 p-2 mx-1 bg-gray-300 rounded-md hover:bg-gray-400"
            onClick={() => handleButtonClick('9')}
          >
            9
          </button>
          <button
            className="w-1/4 p-2 ml-1 bg-orange-500 rounded-md hover:bg-orange-600 text-white"
            onClick={() => handleButtonClick('/')}
          >
            /
          </button>
        </div>
        <div className="flex justify-between">
          {/* Add more buttons similar to the above */}
        </div>
        {/* Add more rows of buttons */}
      </div>
      <div className="flex justify-between">
        <button
          className="w-1/2 p-2 mr-1 bg-gray-300 rounded-md hover:bg-gray-400"
          onClick={() => handleButtonClick('0')}
        >
          0
        </button>
        <button
          className="w-1/4 p-2 mx-1 bg-gray-300 rounded-md hover:bg-gray-400"
          onClick={() => handleButtonClick('.')}
        >
          .
        </button>
        <button
          className="w-1/4 p-2 ml-1 bg-orange-500 rounded-md hover:bg-orange-600 text-white"
          onClick={() => handleButtonClick('=')}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
