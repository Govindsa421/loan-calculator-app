"use client";
import React, { useEffect, useState } from "react";
import { TitleComponent } from "@/components/TitleComponent";
import Card from "@/components/card/Card";
import { LoanCalculatorProps } from "@/types/common";

const LoanCalculator = ({ initialValues, loanType }: LoanCalculatorProps) => {
  // console.log(initialValues, "data");
  const [loanAmt, setLoanAmt] = useState(initialValues);

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
      <TitleComponent loanType={loanType} />
      <Card
        chartData={chartData}
        loanAmt={loanAmt}
        loanType={loanType}
        handleChange={handleChange}
        handleSliderChange={handleSliderChange}
      />
    </div>
  );
};

export default LoanCalculator;
