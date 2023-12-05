import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { SummaryChartProps } from "@/types/cards";

ChartJS.register(ArcElement, Tooltip, Legend);

const SummaryChartComponent = ({ loanAmt, chart }: SummaryChartProps) => {
  const stylesChart = {
    width: "300px",
    height: "300px",
  };
  return (
    <>
      <div className="grid space-y-4 justify-center items-center text-center lg:w-2/5 w-full ">
        <div style={stylesChart}>
          <Pie data={chart} />
        </div>

        <div className=" grid space-y-2">
          <h2 className="font-bold text-xl">Your Monthly EMI is</h2>
          <p className="font-extrabold tracking-wider text-3xl text-gray-500">{`₹${loanAmt.totalEmi}`}</p>
          <p className="text-gray-500">
            {`${loanAmt.interest}% interest rate per annum`}
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
    </>
  );
};

export default SummaryChartComponent;
