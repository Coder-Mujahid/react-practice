import { useState, useEffect } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hoursAngle = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;
  const minutesAngle = time.getMinutes() * 6;
  const secondsAngle = time.getSeconds() * 6;

  // Calculate the position of each number around the clock face
  const numberPositions = Array.from(Array(12).keys()).map((index) => {
    const angle = ((2 - index) * 30) % 360; // Adjusted to start from 12 o'clock and go counter-clockwise
    const radians = (angle * Math.PI) / 180;
    const radius = 137; // Distance from the center
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;
    return { x, y };
  });

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-80 h-80 relative flex ">
        <div
          className="w-full h-full rounded-full relative border-gray-700 border-[10px] shadow-inner shadow-slate-400"
          style={{
            backgroundImage:
              "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
          }}
        >
          {/* Clock numbers */}
          {numberPositions.map(({ x, y }, index) => (
            <div
              key={index}
              className="absolute text-black text-center text-xl font-semibold"
              style={{
                top: `calc(46% - ${y}px)`, // Adjusting the positioning
                left: `calc(46% + ${x}px)`, // Adjusting the positioning
                width: "24px",
                height: "24px",
                transform: `rotate(${-((index + 1) * 0)}deg)`,
                textShadow: "1px 1px 15px rgba(0,255,30,0.6)", // Adjusting the rotation
              }}
            >
              {index + 1}
            </div>
          ))}
          {/* Clock hands */}
          <div
            className="hour-hand absolute shadow-xl shadow-black bg-sky-400 z-10 w-3 h-20 rounded-lg top-[72px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-bottom"
            style={{ transform: `rotate(${hoursAngle}deg)` }}
          ></div>
          <div
            className="minute-hand absolute shadow-xl shadow-black bg-green-500 z-10 w-2 h-28 rounded-lg top-[38px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-bottom"
            style={{ transform: `rotate(${minutesAngle}deg)` }}
          ></div>
          <div
            className="second-hand absolute shadow-lg shadow-black bg-red-500 z-10 w-1 h-32 origin-bottom top-[24px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ transform: `rotate(${secondsAngle}deg)` }}
          ></div>
          {/* Center circle */}
          <div className="center-circle absolute flex items-center justify-center z-20 bg-black w-6 h-6 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p
              className="text-white font-semibold"
              style={{ textShadow: "1px 2px 5px rgba(0,255,30,0.6)" }}
            >
              M
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalogClock;
