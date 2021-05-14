import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/test/action";

import ChildComponent from "./components/ChildComponent";
import { useState } from "react";
import { useMemo } from "react";
import Todo from "./components/Todo";
import Link from "./components/Link/Link";



function App () {
  const dispatch = useDispatch();
  const url = "https://jsonplaceholder.typicode.com/todos";
  useEffect( () => {
    dispatch( fetchData( url ) );
  }, [ dispatch ] );

  const [ count, setCount ] = useState( 0 );

  const array = useMemo( () => {
    return [ "One", "Two", "Three" ];
  }, [] );



  const todos = [
    {
      id: 1,
      title: "open door",
      completed: false
    },
    {
      id: 2,
      title: "wash dishes",
      completed: true
    }
  ]

  return (
    <div className="App">
      <header className="App-header">


        <Link title="this is title" />


        {
          todos.map( ( todo, index ) => (
            <Todo todo={ todo } key={ index } />
          ) )
        }

        <h1> Count is { count } </h1>
        <button
          type="button"
          onClick={ () => setCount( ( prevCount ) => prevCount + 1 ) }
        >
          { " " }
          Increment Count{ " " }
        </button>
        <ChildComponent title="This is title..." array={ array } />
      </header>{ " " }
    </div>
  );
}

export default App;
