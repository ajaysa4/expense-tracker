import React, { useState } from 'react';
import Card from '../UI/card';
import './expenses.css';
import ExpenseFilter from './expensefilter';
import ExpenseList from './expenseslist';
import ExpensesChart from './expenseschart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState();
  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let content=<p>No Expense Found.</p>

  // if(filteredExpenses.length>0){
  //   content=filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />));
  // }

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onFilterChange={filterHandler} />
        <ExpenseList items={filteredExpenses} />
        <ExpensesChart expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
