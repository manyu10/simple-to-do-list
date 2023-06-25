import React, { useState } from "react";
import "./App.css";
import Addtodo from "./Addtodo";
import TodoList from "./TodoList";


function App() {
  const [taskList, setTaskList] = useState([]);

  const addList = (title) => {
    if (title !== "") setTaskList([...taskList, title]);
  };

  const deletelistitem =(key)=>{
    let newtaskList = [...taskList];   //copies tasllist item in this new var.
    newtaskList.splice(key,1)     
    // allows you to modify an array by adding or removing elements at a specific position.
    // The key parameter represents the index of the element you want to remove from the array. and 1 here is delete count i.e no of element to delete the index key.       
    setTaskList([...newtaskList])    //updating th settasklist after deleting
  }

  return (
    <div className="container">
      <Addtodo addList={addList} />
      <hr/>
      {taskList.map((listItem, i) => {
        return (
          <TodoList
            key={i}
            index={i}  //using for the deleting in list
            item={listItem}    //item prop is passing the value of listItem as the item prop to the TodoList component.
            deleteItem={deletelistitem}  
            // deleteItem property calls function deletelistitem
          />
        );
      })}
    </div>
  );
}

export default App;