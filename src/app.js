import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, testFeedback } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from '../src/selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    // console.log(visibleExpenses)

})

const expenseOne = store.dispatch(addExpense({ description: 'Water bill', amount: 500, createdAt: -21000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill', amount: 300, createdAt: -1000 }))
const expenseThree = store.dispatch(addExpense({ description: 'Sandwich', amount: 100, createdAt: 1612785600000 }))
const expenseFour = store.dispatch(addExpense({ description: 'Dessert', amount: 250, createdAt: 1612785600000 }))

// store.dispatch(setTextFilter('bill')) 

// setTimeout (() => {
//     store.dispatch(setTextFilter('sand'))
// }, 3000)

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app')); 