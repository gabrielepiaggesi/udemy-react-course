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
                <ExpenseItem 
                    title={expenses[0].title} 
                    amount={expenses[0].amount} 
                    date={expenses[0].date} 
                />
                <ExpenseItem 
                    title={expenses[1].title} 
                    amount={expenses[1].amount} 
                    date={expenses[1].date} 
                />
                <ExpenseItem 
                    title={expenses[2].title} 
                    amount={expenses[2].amount} 
                    date={expenses[2].date} 
                />
            </Card>
        </div>
    )
}

export default ExpensesList;