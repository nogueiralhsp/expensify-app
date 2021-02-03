import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense, testFeedback } from './actions/expenses';
import {setTextFilter,sortByDate,sortByAmount ,setStartDate ,setEndDate} from './actions/filters'
import getVisibleExpenses from '../src/selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)

})

const expenseOne = store.dispatch(addExpense({ description: 'water bill', amount: 500, createdAt: -21000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'gas bill', amount: 300, createdAt: -1000 }))
const expenseThree = store.dispatch(addExpense({ description: 'sandwich', amount: 100, createdAt: -2000 }))
const expenseFour = store.dispatch(addExpense({ description: 'dessert', amount: 250, createdAt: 3000 }))


store.dispatch(setTextFilter('bill'))


// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())



ReactDOM.render(<AppRouter />, document.getElementById('app')); 