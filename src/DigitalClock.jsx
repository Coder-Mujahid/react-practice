import { useState, useEffect } from 'react';

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
      hour12: false,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 flex items-center justify-center text-white font-semibold text-4xl p-4 rounded-md">
        {formatTime(time)}
      </div>
    </div>
  );
};

export default DigitalClock;
