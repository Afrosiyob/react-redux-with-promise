import "./App.css";
import ApiServices from "./redux/services/api";
import { useEffect, useState } from "react";
import Todo from "./components/Todo/Todo";
import Counter from "./components/Counter/Counter";
import Hello from "./components/Hello/Hello";
import Form from "./components/Form/Form";
import Fetch from "./components/Fetch/Fetch";

function App() {
  const [state] = useState({
    todos: [
      {
        label: "todo 1",
        completed: true,
      },
      {
        label: "todo 2",
        completed: false,
      },
      {
        label: "todo 3",
        completed: false,
      },
    ],
  });

  const { testData } = new ApiServices();

  const url = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    testData(url)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const { todos } = state;

  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <Fetch url="/greeting" />

        {todos?.map((todo, index) => (
          <Todo key={index} label={todo.label} completed={todo.completed} />
        ))}
        <Counter number={0} />
        <Hello />
      </header>
    </div>
  );
}

export default App;
