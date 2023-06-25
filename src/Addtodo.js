import React, {useState} from 'react'
const Addtodo = (props) => {

const [title, setTitle] = useState(''); 
    
  return (
    <>
       <div className='input-container'>
             <input type="text" 
             placeholder='Add task in the Todo list' 
             className='input-task' 
             value={title} 
             onChange={(e) => {setTitle(e.target.value)}}
             />  
             <button className='addbutton' 
              onClick={()=>{
                props.addList(title) 
                setTitle("")  
              }
             }>+</button> 

       </div> 
         

    </>
  )
}

export default Addtodo