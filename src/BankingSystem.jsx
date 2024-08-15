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
  const depositMoney = async () => {
    const { value: amount } = await Swal.fire({
      title: "Enter amount to deposit",
      input: "number",
      inputAttributes: {
        min: 0,
        step: 1,
      },
      showCancelButton: true,
      cancelButtonColor: "#B91C1C",
      confirmButtonText: "Deposit",
      confirmButtonColor: "#22C55E",
    });

    if (amount) {
      setBalance(balance + parseFloat(amount));
      setLastCredit(parseFloat(amount));
      Swal.fire({
        icon: "success",
        title: "Success",
        text: `$${amount} has been deposited!`,
        confirmButtonText: "OK",
        customClass: {
          confirmButton: 'bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700',
        },
        buttonsStyling: false,
      });
    }
  };

  // Function to handle withdrawal
  const withdrawMoney = async () => {
    const { value: amount } = await Swal.fire({
      title: "Enter amount to withdraw",
      input: "number",
      inputAttributes: {
        min: 0,
        step: 1,
      },
      showCancelButton: true,
      cancelButtonColor: "#B91C1C",
      confirmButtonText: "Withdraw",
      confirmButtonColor: "#22C55E",
    });

    if (amount) {
      if (amount <= balance) {
        setBalance(balance - parseFloat(amount));
        setTotalWithdrawn(totalWithdrawn + parseFloat(amount));
        setLastDebit(parseFloat(amount));
        Swal.fire({
          icon: "success",
          title: "Withdrawn",
          text: `$${amount} has been withdrawn!`,
          confirmButtonText: "OK",
          customClass: {
            confirmButton: 'bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700',
          },
          buttonsStyling: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Insufficient balance!",
          text: `You don't have enough balance to withdraw $${amount}.`,
        });
      }
    }
  };

  // Function to handle loan
  const takeLoan = async () => {
    const { value: amount } = await Swal.fire({
      title: "Enter loan amount",
      input: "number",
      inputAttributes: {
        min: 0,
        step: 1,
      },
      showCancelButton: true,
      cancelButtonColor: "#B91C1C",
      confirmButtonText: "Take Loan",
      confirmButtonColor: "#6366F1",
    });

    if (amount) {
      if (loan + parseFloat(amount) <= maxLoanAmount) {
        setLoan(loan + parseFloat(amount));
        setBalance(balance + parseFloat(amount));
        setLastCredit(parseFloat(amount));
        Swal.fire({
          icon: "success",
          title: "Loan Taken",
          text: `$${amount} loan has been taken!`,
          confirmButtonText: "OK",
          customClass: {
            confirmButton: 'bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700',
          },
          buttonsStyling: false,
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Max Loan Reached",
          text: "You have reached your maximum loan limit!",
        });
      }
    }
  };

  return (
    <div className="md:max-w-xl w-11/12 mx-auto bg-white p-5 rounded-lg shadow-md shadow-gray-400 md:mt-24 mt-4">
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

      <div className="grid md:grid-cols-3 grid-cols-2 gap-3">
        <div className="md:row-span-2 md:col-span-1 col-span-2 flex flex-col items-center justify-center bg-green-300 p-5 rounded-md">
          <div className="font-bold text-gray-700 text-center text-sm md:text-base">Total Balance</div>
          <div className="font-bold">${balance.toFixed(2)}</div>
        </div>

        <div className="flex flex-col items-center justify-center bg-purple-300 p-5 rounded-md">
          <div className="font-bold text-gray-700 text-center text-sm md:text-base">Total Withdrawn</div>
          <div className="font-bold">${totalWithdrawn.toFixed(2)}</div>
        </div>

        <div className="flex flex-col items-center justify-center bg-red-400 p-5 rounded-md">
          <div className="font-bold text-gray-700 text-center text-sm md:text-base">Current Loans</div>
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

      <div className="flex justify-between gap-2 mt-6 md:flex-row flex-col">
        <button
          className="bg-blue-500 outline-none transition-all ease-in font-bold text-sm tracking-wide w-full text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={depositMoney}
        >
          Add Balance
        </button>
        <button
          className="bg-red-500 outline-none transition-all ease-in font-bold text-sm tracking-wide w-full text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={withdrawMoney}
        >
          Withdraw Balance
        </button>
        <button
          className="bg-green-500 outline-none transition-all ease-in font-bold text-sm tracking-wide w-full text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={takeLoan}
        >
          Take Loan 
        </button>
      </div>
    </div>
  );
};

export default BankingSystem;
