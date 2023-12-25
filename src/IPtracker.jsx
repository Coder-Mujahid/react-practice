import { useEffect, useState } from 'react';

const IPtracker = () => {
  const [ipInfo, setIpInfo] = useState(null);

  useEffect(() => {
    // Fetch IP information when the component mounts
    fetch('https://ipinfo.io/json')
      .then((response) => response.json())
      .then((data) => setIpInfo(data))
      .catch((error) => console.error('Error fetching IP information:', error));
  }, []);

  return (
    <div>
      {ipInfo ? (
        <div>
          <p>Your IP address: {ipInfo.ip}</p>
          <p>Your location: {ipInfo.city}, {ipInfo.region}, {ipInfo.country}</p>
        </div>
      ) : (
        <p>Loading IP information...</p>
      )}
    </div>
  );
};

export default IPtracker;
