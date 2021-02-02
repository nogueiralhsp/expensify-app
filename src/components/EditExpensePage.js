import React from 'react'
const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <p> this is from my EditPage </p>
            <p> you are editting expense {props.match.params.id} </p>
        </div>
    )
}

export default EditExpensePage