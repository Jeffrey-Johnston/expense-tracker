import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandlers = (event) => {
    props.onChangeFilter(event.target.value);
    console.log("this works");
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <select value={props.selected} onChange={dropdownChangeHandlers}>
          <option value="All">All</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
