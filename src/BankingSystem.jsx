import React, { useState } from "react";
import Badge from '../public/img/money_6133156.png'

const BankingSystem = () => {
  // Initial state
  const [balance, setBalance] = useState(1000); // Default balance
  const [totalWithdrawn, setTotalWithdrawn] = useState(0);
  const [lastCredit, setLastCredit] = useState(0);
  const [lastDebit, setLastDebit] = useState(0);

  // Account details (static for now)
  const accountHolderName = "John Doe";
  const bankName = "Your Bank";
  const bankTitle = "Saving Account";

  // Function to handle deposit
  const depositMoney = (amount) => {
    setBalance(balance + amount);
    setLastCredit(amount);
  };

  // Function to handle withdrawal
  const withdrawMoney = (amount) => {
    if (amount <= balance) {
      setBalance(balance - amount);
      setTotalWithdrawn(totalWithdrawn + amount);
      setLastDebit(amount);
    } else {
      alert("Insufficient balance!");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-5 rounded-lg shadow-md mt-10">


      <div className=" flex justify-between bg-lime-200 mb-5">
        <div className="">
          <h2 className="text-2xl font-bold uppercase">e_bank</h2>
          <h2 className="text-sm font-bold">Financial Peace Guaranteed</h2>

        </div>

        <div className="flex flex-col items-center justify-center">
          <img className="w-8" src={Badge} alt="img" />
          <div className="text-gray-800 text-sm capitalize font-medium">{accountHolderName}</div>
        </div>

      </div>


      <div className="mb-4">
        <div className="font-bold text-gray-700">Bank Title:</div>
        <div className="text-gray-500">{bankTitle}</div>
      </div>

      <div className="mb-4">
        <div className="font-bold text-gray-700">Total Balance:</div>
        <div className="text-gray-500">${balance.toFixed(2)}</div>
      </div>

      <div className="mb-4">
        <div className="font-bold text-gray-700">Total Withdrawn:</div>
        <div className="text-gray-500">${totalWithdrawn.toFixed(2)}</div>
      </div>

      <div className="mb-4">
        <div className="font-bold text-gray-700">Last Credit Amount:</div>
        <div className="text-gray-500">${lastCredit.toFixed(2)}</div>
      </div>

      <div className="mb-4">
        <div className="font-bold text-gray-700">Last Debit Amount:</div>
        <div className="text-gray-500">${lastDebit.toFixed(2)}</div>
      </div>

      <div className="flex space-x-4 mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => depositMoney(100)}
        >
          Deposit $100
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={() => withdrawMoney(100)}
        >
          Withdraw $100
        </button>
      </div>
    </div>
  );
};

export default BankingSystem;
