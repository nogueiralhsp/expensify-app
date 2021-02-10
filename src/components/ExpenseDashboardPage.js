import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseList'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage