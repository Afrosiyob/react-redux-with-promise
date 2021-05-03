import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/test/action";

function App() {
  const dispatch = useDispatch();

  // const delay = (ms) => {
  //   return new Promise((resolve) =>
  //     setTimeout(() => {
  //       resolve();
  //     }, ms)
  //   );
  // };

  const url = "https://jsonplaceholder.typicode.com/todos";

  // const fetchData = async () => {
  //   try {
  //     await delay(2000);
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    dispatch(fetchData(url));
  });

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
