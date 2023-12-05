import React from "react";
import LoanCalculator from "@/common/index";

const HomeLoan = () => {
  const homeLoanInitialValues = {
    amount: 2000000,
    interest: 9,
    duration: 48,
    totalEmi: 0,
    totalInterest: 0,
    totalAmount: 0,
  };

  const labelData = {
    title: "Home",
    emiValues: { minVal: "₹1L", maxVal: "₹10Cr" },
    interestValues: { minVal: "6%", maxVal: "120%" },
    durationValues: { minVal: "12 months", maxVal: "120 months" },
  };
  return (
    <div className="lg:px-40 px-6">
      <LoanCalculator
        loanType={labelData}
        initialValues={homeLoanInitialValues}
      />
    </div>
  );
};
export default HomeLoan;
