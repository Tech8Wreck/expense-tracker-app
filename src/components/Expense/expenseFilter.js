
import React, {useState} from 'react';


import './ExpenseFilter.css';





const ExpensesFilter = (props) => {

const [month, setMonth] = useState('2021')

const setMonthHandler = (event) =>{

setMonth(event.target.value);


  }
  console.log(month)
  props.onSaveMonth(month)

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={month} onChange={setMonthHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;