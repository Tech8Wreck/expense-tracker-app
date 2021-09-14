import "./App.css";
// import ExpenseItem from "./components/ExpenseItem";
import React, {useState} from "react";
import Expenses from "./components/Expense/Expenses";
import Card from "./components/UI/Card"
import NewExpense from "./components/Expense/NewExpense";


const expenses = [
  { name: "Toilet Paper", amount: 20, date: new Date() },
  { name: "Car insurance", amount: 1200, date: new Date() },
  { name: "Rent", amount: 400, date: new Date() },
  { name: "Clothes", amount: 500, date: new Date() }
];


function App() {
  
  

  const [updatedExpenses, updateExpenses] = useState(expenses)

  const newExpenseHandler = (newExp) =>{
  const newArray = expenses.push(newExp)
  
  updateExpenses(newArray)
  // console.log(newArray)

// ALTERNATIVE TO THE ABOVE TO UPDATING THE STATE WITH A NEW ARRAY
// updateExpenses(prevExpenses =>{
//   return [...prevExpenses, newExp]
// })
  
  }
  
  return (
    
    <Card>
      <NewExpense newExpenseAdd={newExpenseHandler} />
      <Expenses items={expenses} />
    </Card>
  );
}

export default App;
