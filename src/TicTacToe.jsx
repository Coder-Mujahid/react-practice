// TicTacToe.jsx

import { useState, useEffect } from 'react';
import './App.css'


const TicTacToe = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  useEffect(() => {
    if (winner) {
      alert(`Player ${winner} wins!`);
      setBoard(initialBoard);
      setIsXNext(true);
    }
  }, [winner, initialBoard]);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div className="tictactoe max-w-md mx-auto mt-10 p-4 bg-gray-200 rounded-lg">
      <div className="status mb-4">
        {winner ? `Player ${winner} wins!` : `Next Player: ${isXNext ? 'X' : 'O'}`}
      </div>
      <div className="board grid grid-cols-3 gap-2">
        {board.map((square, index) => (
          <div key={index}>{renderSquare(index)}</div>
        ))}
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default TicTacToe;
