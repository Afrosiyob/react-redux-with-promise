import logo from './logo.svg';
import './App.css';
import ApiServices from './redux/services/api';
import { useEffect, useState } from 'react';
import Todo from './components/Todo/Todo';

function App () {


  const [ state ] = useState( {
    todos: [
      {
        label: "todo 1",
        completed: true
      },
      {
        label: "todo 2",
        completed: false
      },
      {
        label: "todo 3",
        completed: false
      },

    ]
  } )

  const { testData } = new ApiServices();

  const url = "https://jsonplaceholder.typicode.com/todos";



  useEffect( () => {

    testData( url ).then( ( result ) => {
      console.log( result );


    } ).catch( ( err ) => {
      console.log( err );

    } );

  } )



  const { todos } = state;

  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


        { todos?.map( ( todo, index ) => (
          <Todo key={ index } label={ todo.label } completed={ todo.completed } />
        ) ) }

      </header>
    </div>
  );
}

export default App;
