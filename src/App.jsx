import { useEffect, useState } from "react";
import "./App.css";
import Todos from "./Todos.jsx";
// import  {MyContext}  from "./State";
import { createContext } from "react";
export const MyContext = createContext("");

function App() {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(10);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const data = fetch(
      `https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price`
    )
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.products);
      });
  }, [limit, skip]);

  return (
    <>
      <MyContext.Provider
        value={{ todos, setTodos, setSkip, skip, limit, setLimit }}
      >
        <Todos />
      </MyContext.Provider>
    </>
  );
}

export default App;
