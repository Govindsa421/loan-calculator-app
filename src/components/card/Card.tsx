import React from "react";
import SummaryChartComponent from "../SummaryChartComponent";
import InutComponent from "../InutComponent";

const Card = ({
  chartData,
  loanAmt,
  handleChange,
  handleSliderChange,
  loanType,
}: any) => {
  return (
    <div className="flex lg:flex-row flex-col gap-8 border shadow-lg bg-white p-8">
      <SummaryChartComponent chart={chartData} loanAmt={loanAmt} {...loanAmt} />
      <InutComponent
        loanAmt={loanAmt}
        loanType={loanType}
        handleChange={handleChange}
        handleSliderChange={handleSliderChange}
        {...loanAmt}
      />
    </div>
  );
};

export default Card;
