import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm(){
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)
  
  const [newTodoValue, setNewTodoValue] = React.useState("")

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onCancel = (event) => {
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  return (
    <form 
      className="TodoForm"
      onSubmit={onSubmit}
      >
      <label className="TodoForm__label">Escribe tu <br/> nuevo TODO</label>
      <textarea
        className="TodoForm__textArea"
        placeholder="Escribe aqui"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm__buttonContainer">
        <button
          type="button"
          className="TodoForm__button 
          TodoForm--cancel"
          onClick={onCancel}
        >Cancelar</button>
        <button
          type="submit"
          className="TodoForm__button 
          TodoForm--add"
        >Añadir</button>
      </div>
    </form>
  )
}
export {TodoForm};