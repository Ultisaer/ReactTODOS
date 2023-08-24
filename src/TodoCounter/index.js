import { TodoContext } from '../TodoContext'
import React from "react";
import "./TodoCounter.css";

function TodoCounter() {
  const {    
    loading,
    completedTodos,
    totalTodos, 
  } = React.useContext(TodoContext)
  let content;
  if (loading) {

    content = (
      <>
        Cargando <br />
        TODOS
      </>
    );
  } else {
    if (totalTodos === 0 ) {
      content = (
        <>
          No Posees <br />
          TODOS
        </>
      );
    } else if (completedTodos === totalTodos) {
      content = (
        <>
          Felicitaciones<br />
          <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
        </>
      );
    } else {
      content = (
        <>
          Has completado <br />
          <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
        </>
      );
    }
  }

  return <h1 className="TodoCounter">{content}</h1>;
}

export { TodoCounter };
