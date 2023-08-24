import React from "react";
import { TodoIcon } from "./index.js"

function CompleteIcon({completed}){
  return (
    <TodoIcon
      type="check"
      color={completed ? "#6a6969" : "transparent"}

    />
  )
}

export { CompleteIcon };