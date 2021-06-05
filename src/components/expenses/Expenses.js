//import ExpenseItems from "./expenses/ExpenseItems";
import ExpenseItems from "./ExpenseItems";
import ExpensesFilter from "./../filters/ExpensesFilter";

import Card from "../UI/Card";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.expenses_key.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  let expensesContent = <p> No expenses found.</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItems
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter value={selectedYear} onFilter={filterHandler} />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
