import React from "react";
import { TitleProps } from "@/types/title";

export const TitleComponent = ({ loanType }: TitleProps) => {
  return (
    <div className="py-10 text-center font-bold text-2xl">
      <h1>{`${loanType.title} Loan Calculator`} </h1>
    </div>
  );
};
