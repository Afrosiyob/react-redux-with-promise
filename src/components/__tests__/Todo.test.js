import { render, screen, cleanup } from '@testing-library/react'
import Todo from '../Todo'

import renderer from 'react-test-renderer'

afterEach( () => {
    cleanup()
} )




// eslint-disable-next-line jest/valid-title
test( `should render Todo component no-completed`, () => {
    const todo = {
        id: 1,
        title: "open door",
        completed: false
    }

    render( <Todo todo={ todo } /> )
    const todoElement = screen.getByTestId( `todo-1` )
    expect( todoElement ).toBeInTheDocument()
} )

// eslint-disable-next-line jest/valid-title
test( `should render Todo component completed`, () => {
    const todo = {
        id: 2,
        title: "wash car",
        completed: true
    }

    render( <Todo todo={ todo } /> )
    const todoElement = screen.getByTestId( `todo-2` )
    expect( todoElement ).toBeInTheDocument()
} )

test( 'matches snapshot', () => {
    const todo = {
        id: 1,
        title: "open door",
        completed: false
    }
    const tree = renderer.create( <Todo todo={ todo } /> ).toJSON()
    expect( tree ).toMatchSnapshot();
} )
