import React, { useState } from 'react';
const CoinToss = () => {
  const [side, setSide] = useState(null);

  const tossCoin = () => {
    const randomSide = Math.random() < 0.5 ? 'Heads' : 'Tails';
    setSide(randomSide);
  };

  return (
    <div className="w-10/12 mx-auto flex flex-col items-center justify-center h-screen">
      <h2 className="text-black text-4xl font-bold mb-10">CoinToss</h2>

      <div className="w-32 h-32 rounded-full border-4 border-gray-700 flex items-center justify-center mb-4" style={{ backgroundImage: `url(https://i.ibb.co/SfMNt9z/money-6133156.png)`, backgroundSize: 'cover' }}>
        {side && <span className="text-3xl font-bold text-blue-800">{side}</span>}
      </div>

      <button
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
        onClick={tossCoin}
      >
        Toss Coin
      </button>
    </div>
  );
};

export default CoinToss;
