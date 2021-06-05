import React, { useState } from "react";
import ReactDOM from "react-dom";
import NewExpense from "./components/newExpense/NewExpense";

// import "./index.css";
// import App from './App';
// ReactDOM.render(<App/>, document.getElementById('root'));

const initialExpenses = [
  { id: 1, date: new Date(21, 5, 12), title: "Fuel", value: 50000 },
  { id: 2, date: new Date(21, 5, 13), title: "Salary", value: 40000 },
  { id: 3, date: new Date(21, 5, 14), title: "Rent", value: 60000 },
  { id: 4, date: new Date(21, 5, 15), title: "Groceries", value: 400000 },
  { id: 5, date: new Date(21, 5, 15), title: "Coffes", value: 70000 },
];

const App3 = () => {


  const [expenses, setExpenses] = useState(initialExpenses);

  const addNewExpense = (newExpense) => {
    // setExpenses([...expenses, newExpense]);
    setExpenses(prevExpenses => {
      return(
        [...prevExpenses, newExpense]
      )
    })
    
  };

  console.log(expenses)

  return (
    <div>
      <div>
        <NewExpense bringExpense={addNewExpense} />
        {expenses.map((expense) => (
          <div>
            {expense.title}
            {expense.value}
          </div>
        ))}
      </div>
    </div>
  );


};

ReactDOM.render(<App3/>, document.getElementById("root"));
