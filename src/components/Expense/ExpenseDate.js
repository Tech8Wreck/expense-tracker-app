import "./ExpenseDate.css"


function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <p className="date-item month-item">{month}</p>
      <p className="date-item year-item">{year}</p>
      <p className="date-item day-item">{day}</p>
      
    </div>
  );
}

export default ExpenseDate;
