import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title)

  const changeTitleHundler = () => {
    setTitle('updated')
    console.log('updated')
  }

  return (
    <Card className="expense-item">
      <div>
      <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title} </h2>
        <div className="expense-item__price">
          {props.amount}
        </div>
        <div className="expense-item__price">
        <button onClick={changeTitleHundler}>Change Title</button>
      </div>
      </div>
    </Card>
  );
};

export default ExpenseItems;