import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import "./components/expenses/Expenses.css";

const initial_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


const App = () => {

  const [expenses_value, setExpenses_value] = useState(initial_expenses)

  const addExpenseHandler = (expense) => {
    // setExpenses_value([...expenses_value, expense])
    setExpenses_value(prevExpenses => {
      return [...prevExpenses, expense]
    })
  };

  const addfilterHundler = (addedFillteredYear) => {
    console.log(addedFillteredYear);
  };

  return (

      <div>
        <h1> Master Your Expenses in details Effortlessly! </h1>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses
          onAddFilter={addfilterHundler}
          expenses_key={expenses_value}
        />
      </div>
  );
};

export default App;
