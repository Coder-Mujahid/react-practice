// src/AgeCalculator.jsx
import { useState } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  
  const calculateAge = () => {
    if (!birthDate) return null;

    const currentDate = new Date();
    const birthDateTime = new Date(birthDate);
    
    const ageInMilliseconds = currentDate - birthDateTime;
    
    const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    const remainingMilliseconds = ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000);
    
    const months = Math.floor(remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
    const remainingDays = remainingMilliseconds % (30.44 * 24 * 60 * 60 * 1000);
    
    const weeks = Math.floor(remainingDays / (7 * 24 * 60 * 60 * 1000));
    const remainingWeeks = remainingDays % (7 * 24 * 60 * 60 * 1000);
    
    const days = Math.floor(remainingWeeks / (24 * 60 * 60 * 1000));
    const remainingHours = remainingWeeks % (24 * 60 * 60 * 1000);
    
    const hours = Math.floor(remainingHours / (60 * 60 * 1000));
    const remainingMinutes = remainingHours % (60 * 60 * 1000);
    
    const minutes = Math.floor(remainingMinutes / (60 * 1000));
    const remainingSeconds = remainingMinutes % (60 * 1000);
    
    const seconds = Math.floor(remainingSeconds / 1000);
    
    return {
      years,
      months,
      weeks,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const age = calculateAge();

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="bg-white shadow-lg border-[1px] border-slate-200 shadow-emerald-200 rounded-lg max-w-md p-8">
    <h2 className=' text-center mb-5 text-2xl font-semibold capitalize'> calculate your age 👶 to 👴</h2>
      <input
        type="date"
        className="w-full mb-4 p-2 border rounded focus:outline-none focus:border-blue-500"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        onClick={calculateAge}
      >
        Calculate Age
      </button>
      {birthDate && (
        <div className="text-lg font-semibold mt-4">
          <p>Your age is:</p>
          <ul>
            <li>{age.years} years</li>
            <li>{age.months} months</li>
            <li>{age.weeks} weeks</li>
            <li>{age.days} days</li>
            <li>{age.hours} hours</li>
            <li>{age.minutes} minutes</li>
            <li>{age.seconds} seconds</li>
          </ul>
        </div>
      )}
    </div>
  </div>
  );
};

export default AgeCalculator;
