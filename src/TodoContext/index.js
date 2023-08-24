import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider ({children}){
  const { 
    item : todos , 
    saveItem : saveTodos , 
    loading , 
    error 
  } = useLocalStorage(
   "TODOS__DEFAULT--v1",  []
  )

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const seachText = searchValue.toLowerCase();

      return (
        todoText.includes(seachText)
      );
  })

const addTodo = (text) => {
  const newTodos = [...todos];
  newTodos.push({
    text,
    completed: false,
  })
  saveTodos(newTodos)
}

const completeTodo  = (text) => {
  const newTodos = todos.map(todo => {
    if (todo.text === text) {
      return { ...todo, completed: !todo.completed}
    }
    return todo
  })
  
  saveTodos(newTodos);
}

const deleteTodo  = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  )
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
}

  return (
    <TodoContext.Provider value={{
      loading, 
      error,
      completedTodos, 
      searchValue,
      setSearchValue,
      totalTodos,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
    }}>
      {children}
    </TodoContext.Provider>
  )
}

<TodoContext.Consumer></TodoContext.Consumer>


export { TodoContext, TodoProvider }