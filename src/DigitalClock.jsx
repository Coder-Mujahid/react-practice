import { useState, useEffect } from 'react';
import '../src/App.css'

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="flex Digital justify-center items-center h-screen">
      <div className="bg-[#9DA59E] w-6/12 h-60 rounded-xl shadow-inner shadow-slate-600 font-semibold py-4 px-9 flex items-center  border-[30px] border-slate-800">
        {formatTime(time).split('').map((char, index) => (
          <span key={index} className=" w-full rounded-2xl text-[#11243F]  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl" style={{
    textShadow: '1px 0px 12px rgba(12,230,39,0.6)'
  }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DigitalClock;
