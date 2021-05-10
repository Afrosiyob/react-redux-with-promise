import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/test/action";

import ChildComponent from "./components/ChildComponent";
import { useState } from "react";
import { useMemo } from "react";

function App() {
  const dispatch = useDispatch();
  const url = "https://jsonplaceholder.typicode.com/todos";
  useEffect(() => {
    dispatch(fetchData(url));
  }, [dispatch]);

  const [count, setCount] = useState(0);

  const array = useMemo(() => {
    return ["One", "Two", "Three"];
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Count is {count} </h1>
        <button
          type="button"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          {" "}
          Incriment Count{" "}
        </button>
        <ChildComponent title="This is title..." array={array} />
      </header>{" "}
    </div>
  );
}

export default App;
