import FormPart from "./components/FormPart";
import ListPart from "./components/ListPart";

import { useState } from "react";

function App() {

  const [todos, setTodos] = useState([])

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id))
  }

  return (
    <div className="App">

      <FormPart todos={todos} setTodos={setTodos} />
      <ListPart todos={todos} deleteTodo={deleteTodo} />

    </div>
  );
}

export default App;
