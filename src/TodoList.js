import React  from "react";

function Todolist(props) {
  return (
    <div className="list-container">
    <li className="list-item">
        {props.item}
        <span className='del-button'>
        <button className='del-button'onClick={() => props.deleteItem(props.index)}> Delete</button>
        </span>
    </li>
    </div>
  )
}

export default Todolist