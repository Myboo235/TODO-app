import React from "react";
import Todo from "./Todo";

export default function ToDoList({ ToDoWork , finishedWork , removeWork}) {
  return (
    <>
      {ToDoWork.map(todo =>  <Todo key={todo.id} todo={todo} finishedWork={finishedWork}  removeWork={removeWork}/>)}
    </>
  );
}
