import { ReactComponent as CheckSVG } from "./check.svg"
import { ReactComponent as DeleteSVG } from "./delete.svg"
import "./TodoIcon.css";
const iconTypes = {
  "check": (color) => <CheckSVG className="TodoItem__Svg"  fill={color}/>,
  "delete":(color) => <DeleteSVG className="TodoItem__Svg" fill={color}/>
}

function TodoIcon({type, color}){
  return (
    <span
      className={`TodoItem__Container TodoItem__Container--${type}`}
    >
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon }

/*TodoItem__Img TodoItem__Img--delete*/