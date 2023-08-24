import './TodoItem.css'
import { CompleteIcon } from '../TodoIcon/CompleteIcon.js';
import { DeleteIcon } from '../TodoIcon/DeleteIcon.js';

function TodoItem({text, completed, onCompleted, onDelete}) {
  return (
    <li className={`TodoItem ${completed && "TodoItem__Completed"}`}>
      <button
        className='TodoItem__Container'
        onClick={onCompleted}
      >
      <CompleteIcon
        completed={completed}
      />
      
      </button>
      <p 
        onClick={onCompleted}
      >
        {text}
      </p>
      <button 
        className='TodoItem__Container'
        onClick={onDelete}
        >
      <DeleteIcon
        completed={completed}
      />
      </button>
    </li>
  );
}

export { TodoItem };

/*      
        <img
          className='TodoItem__Img TodoItem__Img--delete'
          src={deleteIcon}
          alt="Boton de eliminar / delete"
        />*/