import React from "react";
import ToDoList from "./todo-app/ToDoList";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { v4 } from "uuid";
import Link from "./todo-app/Link";
// import { Prev } from "react-bootstrap/esm/PageItem";

function App() {
  const [ToDoWork, setToDoWork] = useState([]);
  const [Input, setInput] = useState("");

  const typeInput = (input) => {
    setInput(input.target.value);
  };

  const clickAdd = (input) => {
    setToDoWork([...ToDoWork, {id : v4() ,name: Input, isCompleted: false }]);
    setInput("");
  };

  const finishedWork = (id) =>{
    setToDoWork((prevState) => prevState.map((todo) => 
      (todo.id === id) ? {...todo,isCompleted : !todo.isCompleted} : todo
    ))
  }

  const clearInput = () => {
    setInput("");
  }
  return (
    <>
      <h1
      // margin-bottom: 20px
      >
        This is todo app
      </h1>

      <InputGroup className="mt-3">
        <Form.Control
          placeholder="Your works"
          value={Input}
          onChange={typeInput}
        />
        <Button variant="outline-secondary" onClick={clearInput} >
          Clear
        </Button>
        <Button variant="primary" onClick={clickAdd}>
          Add
        </Button>
      </InputGroup>

      <div>
        <h4 className="mt-4">Work </h4>
        <ToDoList ToDoWork={ToDoWork} finishedWork={finishedWork} />
      </div>
      <div className="fixed-bottom m-4">
        <h4 >Link </h4>
        <Link/>
        <p className="text-primary">©2022-2023 LeNhut . All Right Reseved</p>
      </div>
      
    </>
  );
}

export default App;
