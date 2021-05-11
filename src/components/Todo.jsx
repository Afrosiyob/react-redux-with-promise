import React from 'react'
import PropTypes from 'prop-types'

const Todo = props => {

    const { todo } = props;
    const { id, title, completed } = todo;

    const h1 = <h1> hello { title } </h1>
    const text = completed ? <strike> { h1 } </strike> : h1

    console.log( todo );

    return (
        <div data-testid={ `todo-${ id }` }>
            { text }
        </div>
    )
}

Todo.propTypes = {
    todo: PropTypes.shape( {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    } )
}

export default Todo
