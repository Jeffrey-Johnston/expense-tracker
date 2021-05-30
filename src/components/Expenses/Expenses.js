import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import NewExpense from "../NewExpense/NewExpense";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const addExpenseHandler = (expenseData) => {
    props.addExpense(expenseData);
  };

  return (
    <div>
      <Card className="expenses">
        <h1 className="title">EXPENSE TRACKER</h1>
        <section className="top-section">
          <div className="button-group">
            <NewExpense onAddExpense={addExpenseHandler} />

            <ExpensesFilter
              selected={filteredYear}
              onChangeFilter={filterChangeHandler}
            />
          </div>

          <ExpensesChart expenses={filteredExpenses} />
        </section>
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
