import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Todo = props => {

    const { label, completed } = props

    return (
        <Fragment>

            <h4 data-testid="todo-1"> { label }  { completed ? "active" : "nonactive" }  </h4>


        </Fragment>
    )
}

Todo.propTypes = {

    label: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired

}

export default Todo
