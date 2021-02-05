import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters'

const ExpenseListFilters = (props) => (
    <div>
        <input
            type="text"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }} />
        <select
        value={props.filters.sortBy}
            onChange={(e) => {
                if (e.target.value === 'amount') {
                    props.dispatch(sortByAmount())
                } else {
                    props.dispatch(sortByDate())
                }
            }}>
            <option value="amount">Amount</option>
            <option value="date">Date</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)