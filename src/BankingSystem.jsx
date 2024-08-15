import React, { useState } from "react";
import Badge from '../public/img/money_6133156.png';
import Swal from "sweetalert2";

const BankingSystem = () => {
  // Initial state
  const [balance, setBalance] = useState(1000); // Default balance
  const [totalWithdrawn, setTotalWithdrawn] = useState(0);
  const [lastCredit, setLastCredit] = useState(0);
  const [lastDebit, setLastDebit] = useState(0);
  const [loan, setLoan] = useState(0); // Loan state

  // Account details (static for now)
  const accountHolderName = "John Doe";

  // Maximum loan amount
  const maxLoanAmount = 5000;

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

  // Function to handle loan
  const takeLoan = (amount) => {
    if (loan + amount <= maxLoanAmount) {
      setLoan(loan + amount);
      setBalance(balance + amount);
      setLastCredit(amount);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Max Loan Reached",
        text: "You have reached your maximum loan limit!",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-5 rounded-lg shadow-md shadow-gray-400 mt-24">
      <div className="flex justify-between mb-5">
        <div className="">
          <h2 className="text-2xl font-bold uppercase">e_bank</h2>
          <h2 className="text-sm font-bold">Financial Peace Guaranteed</h2>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img className="w-8" src={Badge} alt="img" />
          <div className="text-gray-800 text-sm capitalize font-medium">
            {accountHolderName}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="row-span-2 flex flex-col items-center justify-center bg-red-300 p-5 rounded-md">
          <div className="font-bold text-gray-700">Total Balance</div>
          <div className="font-bold">${balance.toFixed(2)}</div>
        </div>

        <div className="flex flex-col items-center justify-center bg-purple-300 p-5 rounded-md">
          <div className="font-bold text-gray-700">Total Withdrawn</div>
          <div className="font-bold">${totalWithdrawn.toFixed(2)}</div>
        </div>

        <div className="flex flex-col items-center justify-center bg-teal-300 p-5 rounded-md">
          <div className="font-bold text-gray-700">Current Loans</div>
          <div className="font-bold">${loan.toFixed(2)}</div>
        </div>

        <div className="flex flex-col items-center justify-center bg-blue-300 p-5 rounded-md">
          <div className="font-bold text-gray-700 text-center">Last Deposit</div>
          <div className="font-bold">${lastCredit.toFixed(2)}</div>
        </div>

        <div className="flex flex-col items-center justify-center bg-cyan-300 p-5 rounded-md">
          <div className="font-bold text-gray-700 text-center">Last Withdrawn</div>
          <div className="font-bold">${lastDebit.toFixed(2)}</div>
        </div>
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
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => takeLoan(100)}
        >
          Take Loan $100
        </button>
      </div>
    </div>
  );
};

export default BankingSystem;
