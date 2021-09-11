import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";
import React, {useState} from "react";

const NewExpense = (props) => {
  const newExpenseHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
      
    };
    startEditing(false)
    props.newExpenseAdd(data);
  };

const [isEditing, startEditing] = useState(false)

  const startEditingHandler = () =>{
    startEditing(true)
  }

const stopEditing = () =>{
  startEditing(false)
}


let content = <div  className="expense-item">
<button onClick={startEditingHandler} id="add">Add Expense</button>
</div>

if(isEditing){
content = <div className="new-expense">
         <NewExpenseForm onSaveExpense={newExpenseHandler} onCancel={stopEditing}/>
      </div>
}



  return (
    <div>

      {content}

       
      
    </div>
  );
};

export default NewExpense;
