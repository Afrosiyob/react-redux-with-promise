import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/test/action";

function App() {
  const dispatch = useDispatch();

  const url = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    dispatch(fetchData(url));
  });

  const Animals = (options) => {
    this.name = options.name;
    this.color = options.color;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
