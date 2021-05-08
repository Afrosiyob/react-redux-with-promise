import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/test/action";
import { useFormInput } from "./hooks/useFormInput";


function App () {
  const dispatch = useDispatch();
  const url = "https://jsonplaceholder.typicode.com/todos";
  useEffect( () => {
    dispatch( fetchData( url ) );
  }, [ dispatch ] );



  const name = useFormInput( "" );


  console.log( name );


  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />



        <input type="text" { ...name } />



      </header>
    </div>
  );
}

export default App;

