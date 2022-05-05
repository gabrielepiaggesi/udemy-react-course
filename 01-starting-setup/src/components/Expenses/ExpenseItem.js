import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title); // Hook for managing the "state" of a property and rerended this (just this) component when it is uptated.

    const clickHandler = () => {
        setTitle('Updated!'); // tells react to rerender (call again this component function that will return the uptated jsx) this (just this) component when title is uptated.
    };
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
