import React from "react";
import Todo from "./Todo";

export default function ToDoList({ ToDoWork , finishedWork}) {
  return (
    <>
      {ToDoWork.map(todo =>  <Todo key={todo.id} todo={todo} finishedWork={finishedWork} />)}
    </>
  );
}
