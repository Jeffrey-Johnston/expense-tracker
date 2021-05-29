import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);
  const showFormHandler = () => {
    setFormVisible(true);
  };
  const hideFormHandler = () => {
    setFormVisible(false);
  };

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!formVisible && (
        <button className="add-button" type="button" onClick={showFormHandler}>
          Add Expense
        </button>
      )}
      {formVisible && (
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      )}
      {formVisible && (
        <p className="cancel-button" onClick={hideFormHandler}>
          Cancel
        </p>
      )}
    </div>
  );
};

export default NewExpense;
