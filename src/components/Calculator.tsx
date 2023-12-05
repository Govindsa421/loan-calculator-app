import { loanCategory } from "@/app/routes";
import Link from "next/link";
import React from "react";

const Calculator = () => {
  return (
    <div className="">
      <div className="px-16 py-20">
        <div className="text-center space-y-3 py-10">
          <h1 className="font-bold text-2xl">Category Loan Calculator</h1>
          <p className="text-gray-500 text-sm">
            Save time now to build a financially secure future ahead smart
            planning today leads to a stable tomorrow.
          </p>
        </div>
        <div className="grid grid-cols-4 capitalize gap-8 ">
          {loanCategory.map((categ) => (
            <div key={categ.text} className="categoryCard">
              <Link href={`/pages/${categ.link}`} as={`/pages/${categ.link}`}>
                <h1>{categ.text}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
