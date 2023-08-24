import { TodoContext } from '../TodoContext'
import React from "react";
import './TodoButton.css'

function TodoButton() {
  const {
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
  return (
    <button className='TodoButton'
    onClick={
      () => {
        setOpenModal(!openModal)
      }
    }> + </button>
  )
}

export { TodoButton }