import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./expenseFilter";
import ExpenseChart from "./ExpenseChart"

function Expenses(props) {
  const [recievedFilterYear, setFilteredYear] = useState("");

  const setMonthHandler = (year) => {
    setFilteredYear(year);
    console.log(
      "recived the month from the expense filter component",
      recievedFilterYear
    );
  };

  const filterYear = props.items.filter((year) => {
    return year.date.getFullYear().toString() === recievedFilterYear;
  });

  return (
    <div>
      <ExpensesFilter onSaveMonth={setMonthHandler} />
<ExpenseChart data={filterYear} />
{filterYear.length === 0 ? <p style={{color: 'white'}}>No Expenses for the selected year</p> : filterYear.map((expense) => (
        <ExpenseItem
          date={expense.date}
          name={expense.name}
          amount={expense.amount}
        />
      ))}

  

      {/* <ExpenseItem
        date={props.items[0].date}
        name={props.items[0].name}
        amount={props.items[0].amount}
      ></ExpenseItem>

      <ExpenseItem
        date={props.items[1].date}
        name={props.items[1].name}
        amount={props.items[1].amount}
      ></ExpenseItem>

      <ExpenseItem
        date={props.items[2].date}
        name={props.items[2].name}
        amount={props.items[2].amount}
      ></ExpenseItem>

      <ExpenseItem
        date={props.items[3].date}
        name={props.items[3].name}
        amount={props.items[3].amount}
      ></ExpenseItem>  */}
    </div>
  );
}

export default Expenses;
