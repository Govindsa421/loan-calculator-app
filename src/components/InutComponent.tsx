import React, { useEffect, useState } from "react";
import Input from "@/custom/input";
import { InputFieldProps } from "@/types/cards";
import { useDebounce } from "@/hooks";

const InutComponent = ({
  loanAmt,
  handleChange,
  handleSliderChange,
  loanType,
}: InputFieldProps) => {
  const [val, setVal] = useState("");
  const debouncedLoanAmt = useDebounce(val, 30);

  useEffect(() => {
    if (!debouncedLoanAmt) {
      setVal("");
      return;
    }
    console.log(debouncedLoanAmt, "hello");
  }, [debouncedLoanAmt]);
  console.log(loanType, "loanType");

  return (
    <>
      <div className="flex gap-12 flex-col lg:w-3/5 w-full ">
        <div>
          <Input
            type="number"
            value={loanAmt.amount}
            onChange={(e) => {
              setVal(e.target.value);
              handleChange(e, "amount");
            }}
            label="Loan Amount"
          />
          <Input
            type="range"
            min={5000}
            max={6000000}
            step={1000}
            value={loanAmt.amount}
            onChange={(e) => {
              setVal(e.target.value);
              handleSliderChange(parseFloat(e.target.value), "amount");
            }}
            onBlur={() => {
              setVal(loanAmt.amount.toString());
            }}
          />
          <div className="flex text-xs justify-between text-gray-400">
            <span>{`Min ${loanType.emiValues.minVal}`}</span>
            <span>{`Max ${loanType.emiValues.maxVal}`}</span>
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
            min={6}
            max={120}
            step={0.1}
            value={loanAmt.interest}
            onChange={(e) =>
              handleSliderChange(parseFloat(e.target.value), "interest")
            }
          />
          <div className="flex text-xs justify-between text-gray-400">
            <span>{`Min ${loanType.interestValues.minVal}`}</span>
            <span>{`Max ${loanType.interestValues.maxVal}`}</span>
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
            <span>{`Min ${loanType.durationValues.minVal}`}</span>
            <span>{`Max ${loanType.durationValues.maxVal}`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InutComponent;
