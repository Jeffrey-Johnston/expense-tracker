import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleFormHandler = () => {
    if (!formVisible) {
      setFormVisible(true);
    } else {
      setFormVisible(false);
    }
  };

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    toggleFormHandler();
  };

  return (
    <div className="new-expense">
      {!formVisible && (
        <button
          className="add-button"
          type="button"
          onClick={toggleFormHandler}
        >
          Add Expense
        </button>
      )}
      {formVisible && (
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      )}
      {formVisible && (
        <p className="cancel-button" onClick={toggleFormHandler}>
          Cancel
        </p>
      )}
    </div>
  );
};

export default NewExpense;
