import './NewExpense.css'
import React, {useState} from 'react';

const NewExpenseForm = (props) => {

const [receivedExpenseName, setExpenseName] = useState('')
const [receivedExpenseAmount, setExpenseAmount] = useState('')
const [receivedExpenseDate, setExpenseDate] = useState('')

    const titleChangeHandler = (event) =>{
        // console.log('Title changed')
        setExpenseName(event.target.value);

    }

const amountChangeHandler = (event) =>{
    setExpenseAmount(event.target.value)
}

const dateChangeHandler = (event) =>{
    setExpenseDate(event.target.value)
}


const buttonSubmit = (event) =>{
event.preventDefault();

const expenseData = {
name: receivedExpenseName,
amount: +receivedExpenseAmount,
date: new Date(receivedExpenseDate)
}


props.onSaveExpense(expenseData)

// console.log(expenseData)
setExpenseAmount('')
setExpenseDate('')
setExpenseName('')

}




// function OnClickedHandler() {
//     props.onButtonClick(this)
// }


  return (
    <div className="form-control">
      <form onSubmit={buttonSubmit}>
        <div className="form-items">
            <label for="expense-name">Expense Name</label>
            <input id="expense-name" type="text" value={receivedExpenseName} onChange={titleChangeHandler} />
        </div>
        <div className="form-items">
            <label for="expense-amount">Expense Amount</label>
            <input id="expense-amount" type="number" min="0" step="5" value={receivedExpenseAmount}  onChange={amountChangeHandler} />
        </div>
        <div className="form-items">
            <label for="expense-date">Expense Date</label>
            <input id="expense-date" type="date" value={receivedExpenseDate}  onChange={dateChangeHandler} />
        </div>
        
<div className="add-expense-button-actions">
    <button  type="submit" className="add-expense-button">Add Expense List</button>
    <button onClick={props.onCancel}  type="button" className="add-expense-button">Cancel</button>
</div>

      </form>
    </div>
  );
};

export default NewExpenseForm;