import React, { useState } from "react";
import Card from "../UI/Card";

import ExpenseList from "./ExpenseList";
import ExpenseFiltter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // in filter method filter search for the expense which contain the date equal to filteredYear and it take that expense from item and store that expense data in FilteredExpenses ie.(id,title amount..)
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  /// we are using this approach so to use expenseContent anywhere

  // let expenseContent = <p>Nothing found</p>;
  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFiltter
          // selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList item={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
