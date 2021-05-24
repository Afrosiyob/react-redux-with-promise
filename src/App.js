import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/fetch/action";
import Routes from "./routes/Routes";

function App() {
  const dispatch = useDispatch();

  const url = "https://jsonplaceholder.typicode.com/todos/1";

  useEffect(() => {
    dispatch(fetchData(url));
  }, [dispatch]);

  return <Routes />;
}

export default App;
