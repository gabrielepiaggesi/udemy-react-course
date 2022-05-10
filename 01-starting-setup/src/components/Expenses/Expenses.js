import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    // this is not a state because depends already on the filteredYear stae, so if this state is updated, 
    // the parent component (Expenses) is run again, so this function is run again with the new fileteredYear value 
    // and so with resulting with a new array, so here the state for this array is not needed.
    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter year={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;