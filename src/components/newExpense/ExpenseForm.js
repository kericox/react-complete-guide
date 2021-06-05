import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(enteredDate);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(enteredTitle);
  };

  const amountChangeHundler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(enteredAmount);
  };

  const submitFormHundler = (event) => {
    event.preventDefault()
    const expenseData = {
      date: new Date(enteredDate), 
      title: enteredTitle,
      amount: enteredAmount,
    };
    props.onSaveExpenseData(expenseData)
    setEnteredDate('')
    setEnteredTitle('')
    setEnteredAmount('')
    
  };
  return (
    <form onSubmit={submitFormHundler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            value={enteredTitle}
            onChange={titleChangeHandler} 
            />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input 
          type="number"
          min='0.01' 
          step='0.01'
          value={enteredAmount}
          onChange={amountChangeHundler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
