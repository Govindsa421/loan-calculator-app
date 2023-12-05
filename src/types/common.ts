export interface LoanCalculatorProps {
  initialValues: {
    amount: number;
    interest: number;
    duration: number;
    totalEmi?: number;
    totalAmount?: number;
    totalInterest?: number;
  };
  loanType: { title: string };
}
