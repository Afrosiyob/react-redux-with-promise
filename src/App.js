import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/test/action";





function App () {
  const dispatch = useDispatch();
  const url = "https://jsonplaceholder.typicode.com/todos";
  useEffect( () => {
    dispatch( fetchData( url ) );
  }, [ dispatch ] );






  return (
    <div className="App">
      <header className="App-header">

        this is header
      </header>{ " " }
    </div>
  );
}

export default App;
