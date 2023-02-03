import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton'

export default function Todo({ todo , finishedWork , removeWork }) {


  return (

    
    <div id={todo.id} className="d-grid container">
      <div className="row">
        <Button  className={todo.isCompleted ?"d-flex  mt-2 col-10 text-decoration-line-through" :"d-flex  mt-2 col-10"} variant={todo.isCompleted ? "success":"secondary"}>
        {todo.name}
        <Form.Check 
        
        type="switch"
        label="Finished"
         className="ps-2 ms-auto"
        onClick={ () =>{
          finishedWork(todo.id)}}
      />
      </Button>
      <CloseButton className="mx-1 mt-3 col-1" aria-label="Hide" onClick={() =>{removeWork(todo.id)}}/>

      </div>
      
   </div>
  );
}
