import React, {useState} from 'react'

import "./ExpenseItem.css";
import { Button, Color } from "react-bootstrap/Button";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const name = 'Nico'
  // const surname = 'Semenya'

  // const [name,setName] = useState(props.name)

// const ClickHander = () =>{
//   setName('Updated!')
//   console.log(name)
// }


  return (
  
      <div className="expense-item">
        <div className="subDiv">
          <ExpenseDate date={props.date} />

          <div className="">
            <h3>{props.name}</h3>
          </div>

          <div className="selfDiv">
            <h3>{props.amount}</h3>
          </div>
          {/* <button onClick= {ClickHander}>Button</button> */}
        </div>
      </div>
  
  );
}

export default ExpenseItem;
