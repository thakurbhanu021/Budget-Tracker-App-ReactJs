import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../Context";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  // search bar with debouncing logic

  const [searchText, setSearchText] = useState("");

  const [debouncedValue, setDebouncedValue] = useState(searchText);

  useEffect(() => {
    if (searchText) {
      const handler = setTimeout(() => {
        setDebouncedValue(searchText);
      }, 500);
      return () => {
        clearTimeout(handler);
      };
    } else return;
  }, [searchText]);

  const filteredExpenses = expenses.filter((filteredExpense)=> filteredExpense.name.toLowerCase().includes(debouncedValue));

  //Normal search logic

  //   const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  //   useEffect(()=>{
  //     setFilteredExpenses(expenses);
  //   },[expenses])

  //   const handleChange = (event) => {
  //     const searchResult = expenses.filter((filteredExpense)=> filteredExpense.name.toLowerCase().includes(event.target.value));
  //     setFilteredExpenses(searchResult);
  //   }

  return (
    <>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Type to search..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ul className="list-group">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
