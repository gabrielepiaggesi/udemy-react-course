import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import './ExpensesList.css'

function ExpensesList(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    // this is not a state because depends already on the filteredYear stae, so if this state is updated, 
    // the parent component (ExpensesList) is run again, so this function is run again with the new fileteredYear value 
    // and so with resulting with a new array, so here the state for this array is not needed.
    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

    let expensesContent = (<p>No expenses found.</p>);
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => 
            <ExpenseItem
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
            />
        );
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter year={filteredYear} onChangeFilter={filterChangeHandler} />
                {expensesContent}
            </Card>
        </div>
    )
}

export default ExpensesList;