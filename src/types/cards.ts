import { ChangeEvent } from "react";

export interface InputFieldProps {
  loanAmt: { amount: number; interest: number; duration: number };
  // eslint-disable-next-line no-unused-vars
  handleChange: (e: ChangeEvent<HTMLInputElement>, field: string) => void;
  // eslint-disable-next-line no-unused-vars
  handleSliderChange: (value: number, field: string) => void;
  loanType: {
    emiValues: { minVal: number; maxVal: number };
    interestValues: { minVal: number; maxVal: number };
    durationValues: { minVal: number; maxVal: number };
  };
}

export interface SummaryChartProps {
  loanAmt: {
    totalEmi: number;
    interest: number;
    totalInterest: number;
    totalAmount: number;
  };
  chart: any;
}
