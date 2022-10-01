import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const year = props.date.getFullYear();

  return (
    <div className="expensedate-list">
      <div className="expensedate-list__month">{month}</div>
      <div className="expensedate-list__day">{day}</div>
      <div className="expensedate-list__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
