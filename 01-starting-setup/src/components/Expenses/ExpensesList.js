import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import './ExpensesList.css'

function ExpensesList(props) {
    const expenses = props.expenses;
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter year={filteredYear} onChangeFilter={filterChangeHandler} />
                {expenses.map((expense) => 
                <ExpenseItem 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                />)}
            </Card>
        </div>
    )
}

export default ExpensesList;