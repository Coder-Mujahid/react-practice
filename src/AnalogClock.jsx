import React, { useState, useEffect } from 'react';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  const hoursAngle = ((time.getHours() % 12) * 30) + (time.getMinutes() * 0.5);
  const minutesAngle = time.getMinutes() * 6;
  const secondsAngle = time.getSeconds() * 6;

  // Calculate the position of each number around the clock face
  const numberPositions = Array.from(Array(12).keys()).map((index) => {
    const angle = ((2 - index) * 30) % 360; // Adjusted to start from 12 o'clock and go counter-clockwise
    const radians = (angle * Math.PI) / 180;
    const radius = 110; // Distance from the center
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;
    return { x, y };
  });
  
  
  

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-64 h-64 relative flex bg-red-400">
        <div className="w-full h-full rounded-full border-4 border-gray-300 relative bg-stone-500">
          {/* Clock numbers */}
          {numberPositions.map(({ x, y }, index) => (
            <div
              key={index}
              className="absolute text-black text-center"
              style={{
                top: `calc(45% - ${y}px)`, // Adjusting the positioning
                left: `calc(45% + ${x}px)`, // Adjusting the positioning
                width: '24px',
                height: '24px',
                transform: `rotate(${-((index + 1) * 0)}deg)`, // Adjusting the rotation
              }}
            >
              {index + 1}
            </div>
          ))}
          {/* Clock hands */}
          <div className="hour-hand absolute bg-sky-400 z-10 w-3 h-20 rounded-lg top-[42px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-bottom" style={{ transform: `rotate(${hoursAngle}deg)` }}></div>
          <div className="minute-hand absolute bg-green-500 z-10 w-2 h-28 rounded-lg top-[8px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-bottom" style={{ transform: `rotate(${minutesAngle}deg)` }}></div>
          <div className="second-hand absolute bg-red-500 z-10 w-1 h-28 origin-bottom top-[10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ transform: `rotate(${secondsAngle}deg)` }}></div>
          {/* Center circle */}
          <div className="center-circle absolute bg-black w-6 h-6 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default AnalogClock;
