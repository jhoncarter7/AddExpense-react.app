import React, { useState } from "react";

import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 12,
    title: "rice",
    amount: 23,
    date: new Date(2022, 2, 11),
  },
  {
    id: 13,
    title: "milk",
    amount: 10,
    date: new Date(2022, 2, 15),
  },
  {
    id: 14,
    title: "sugar",
    amount: 17,
    date: new Date(2022, 2, 13),
  },
  {
    id: 15,
    title: "butter",
    amount: 22,
    date: new Date(2021, 2, 13),
  },
];

const App = () => {
  // here we equal the expenses to Dummy_expenses
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // here addExpenseHandler return both the value (old and new data)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
