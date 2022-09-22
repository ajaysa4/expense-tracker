import React, { useState } from 'react';

import ExpenseDate from './expensedate';
import Card from '../UI/card';
import './expenseitem.css';
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clcickHandler = () => {
    setTitle('updated');
  };

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{props.amount}</div>
        </div>
        <button onClick={clcickHandler}>click</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
