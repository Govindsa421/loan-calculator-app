import React from "react";
import LoanCalculator from "@/common/index";

const PersonalLoan = () => {
  const personalLoanInitialValues = {
    amount: 500000,
    interest: 11,
    duration: 36,
    totalEmi: 0,
    totalInterest: 0,
    totalAmount: 0,
  };

  const labelData = {
    title: "Personal",
    emiValues: { minVal: "₹5k", maxVal: "₹60L" },
    interestValues: { minVal: "6%", maxVal: "120%" },
    durationValues: { minVal: "3 months", maxVal: "120 months" },
  };
  return (
    <div className="lg:px-40 px-6">
      <LoanCalculator
        loanType={labelData}
        initialValues={personalLoanInitialValues}
      />
    </div>
  );
};
export default PersonalLoan;
