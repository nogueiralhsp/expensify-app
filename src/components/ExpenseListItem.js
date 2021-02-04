console.log('expense list item is running');

import React from 'react'

const ExpenseListItem = (props) => {
    // console.log(props);  used to debug props and select items I wanted to use
    return (
        <div>
            <h3>{props.description}</h3>
            <p>{props.amount} created at {props.createdAt} </p>
        </div>
    )
}

export default ExpenseListItem