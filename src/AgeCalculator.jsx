import { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const currentDate = new Date();
    const inputDate = new Date(birthDate);

    if (isNaN(inputDate.getTime())) {
      alert('Please enter a valid date.');
      return;
    }

    const diffInMilliseconds = currentDate - inputDate;
    const ageDate = new Date(diffInMilliseconds);

    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(calculatedAge);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Age Calculator</h2>
        <div className="mb-4">
          <label htmlFor="birthDate" className="block text-gray-700">
            Enter your birthdate:
          </label>
          <input
            type="date"
            id="birthDate"
            className="mt-1 p-2 w-full border rounded"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={calculateAge}
        >
          Calculate Age
        </button>
        {age !== null && (
          <div className="mt-4">
            <p className="text-lg font-semibold">
              Your age is: {age} {age === 1 ? 'year' : 'years'}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};


export default AgeCalculator;