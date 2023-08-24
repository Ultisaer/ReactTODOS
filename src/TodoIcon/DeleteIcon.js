import React from "react";
import { TodoIcon } from "./index.js"

function DeleteIcon({completed}){
  return (
    <TodoIcon
    type="delete"
    color={completed ? "red" : "transparent"}
      
  />
  )
}

export { DeleteIcon };