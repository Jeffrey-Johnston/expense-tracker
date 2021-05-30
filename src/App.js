import Expenses from "./components/Expenses/Expenses";

import { useState } from "react";

const INITIAL_EXPENSES = [
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
    date: new Date(2021, 1, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 3, 12),
  },
  {
    id: "e5",
    title: "Car Repair",
    amount: 495.78,
    date: new Date(2020, 6, 4),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2020, 7, 12) },
  {
    id: "e6",
    title: "Vacation",
    amount: 2000,
    date: new Date(2020, 11, 28),
  },
  {
    id: "e7",
    title: "Dentist",
    amount: 200,
    date: new Date(2021, 0, 11),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <Expenses items={expenses} addExpense={addExpense} />
    </div>
  );
};

export default App;
