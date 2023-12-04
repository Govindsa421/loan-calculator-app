"use client";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Input from "@/custom/input";

ChartJS.register(ArcElement, Tooltip, Legend);

const PersonalLoan = () => {
  const initialState = {
    amount: 500000,
    interest: 11,
    duration: 36,
    totalEmi: 0,
    totalInterest: 0,
    totalAmount: 0,
  };
  const [loanAmt, setLoanAmt] = useState(initialState);

  const handleSubmit = () => {
    const { amount: a, interest: i, duration: d } = loanAmt;

    let actualRate = i / 12 / 100;
    let calcEmi =
      a *
      actualRate *
      (Math.pow(1 + actualRate, d) / (Math.pow(1 + actualRate, d) - 1));
    setLoanAmt({
      ...loanAmt,
      totalEmi: Math.round(calcEmi),
      totalAmount: Math.round(calcEmi * d),
      totalInterest: Math.round(calcEmi * d - a),
    });
  };

  const handleChange = (e: any, field: any) => {
    setLoanAmt({ ...loanAmt, [field]: e.target.value });
  };

  const handleSliderChange = (value: number, field: string) => {
    setLoanAmt({ ...loanAmt, [field]: value });
  };

  useEffect(() => {
    handleSubmit();
  }, [loanAmt.amount, loanAmt.interest, loanAmt.duration]);

  const chartData = {
    labels: ["Loan Amount", "Total Interest", "Total Amount"],
    datasets: [
      {
        data: [loanAmt.amount, loanAmt.totalInterest, loanAmt.totalAmount],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div>
      <div className="  h-screen px-40">
        <div className="py-10 text-center font-bold text-2xl">
          <h1>Personal Loan Calculator</h1>
        </div>
        <div className=" flex p-12 rounded shadow-md border gap-8 ">
          <div className="grid place-content-center gap-6 text-center w-2/5 ">
            <div className=" w-60 h-60 ">
              <Pie data={chartData} />
            </div>

            <div className=" grid space-y-2">
              <h2 className="font-bold text-xl">Your Monthly EMI is</h2>
              <p className="font-extrabold tracking-wider text-3xl text-gray-500">{`₹${loanAmt.totalEmi}`}</p>
              <p className="text-gray-500">
                {loanAmt.interest}% interest rate per annum
              </p>
            </div>

            <div className="flex justify-between">
              <div>
                <h2 className="font-bold">Total Interest</h2>
                <p className="text-gray-600 ">{`₹${loanAmt.totalInterest}`}</p>
              </div>
              <div>
                <h2 className="font-bold">Total Amount</h2>
                <p className="text-gray-600">{`₹${loanAmt.totalAmount}`}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-12 flex-col w-3/5">
            <div>
              <Input
                type="number"
                value={loanAmt.amount}
                onChange={(e) => handleChange(e, "amount")}
                label="Loan Amount"
              />
              <Input
                type="range"
                min={5000}
                max={6000000}
                step={1000}
                value={loanAmt.amount}
                onChange={(e) =>
                  handleSliderChange(parseFloat(e.target.value), "amount")
                }
              />
              <div className="flex text-xs justify-between text-gray-400">
                <span>Min ₹5k</span>
                <span>Max ₹60L</span>
              </div>
            </div>

            <div>
              <Input
                type="number"
                value={loanAmt.interest}
                onChange={(e) => handleChange(e, "interest")}
                label="Rate of Interest (P.a)"
              />
              <Input
                type="range"
                min={1}
                max={60}
                step={0.1}
                value={loanAmt.interest}
                onChange={(e) =>
                  handleSliderChange(parseFloat(e.target.value), "interest")
                }
              />
              <div className="flex text-xs justify-between text-gray-400">
                <span>Min 5%</span>
                <span>Max 60%</span>
              </div>
            </div>

            <div>
              <Input
                type="number"
                value={loanAmt.duration}
                onChange={(e) => handleChange(e, "duration")}
                label="Loan Tenure (Months)"
              />

              <Input
                type="range"
                min={3}
                max={120}
                step={1}
                value={loanAmt.duration}
                onChange={(e) =>
                  handleSliderChange(parseFloat(e.target.value), "duration")
                }
              />
              <div className="flex text-xs justify-between text-gray-400">
                <span>Min 3 months</span>
                <span>Max 120 months</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalLoan;
