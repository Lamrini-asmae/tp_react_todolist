
import { useReducer, useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos,setTodos]=useState([]);
  const inputRef=useRef();
  const  handleAddItem=()=>{
        const text=inputRef.current.value;
        const item={done: false,text};
        setTodos([...todos,item]);
        inputRef.current.value="";
  }
  const handleItemDone=(index)=>{
    console.log(index);
    const newList=[...todos];
    newList[index].done=! newList[index].done;
    setTodos(newList);
  }
  const handleItemDelete=(index)=>{
    const newList=[...todos];
    newList.splice(index,1);
    setTodos(newList);
  }
  return (
    <div className="App">
      <h2>My To Do List</h2>
      <div className='container-todoLsit'>
      <input ref={inputRef} placeholder='add new item'/>
      <button onClick={handleAddItem} >Add</button>
        <ul>
            {todos.map(({ text, done }, index)=>{
              return (
                <div className='Item'>
                    <li key={index} 
                     className={done ? 'done' : ""} 
                    onClick={()=>handleItemDone(index)} >{text}</li>
                    <span onClick={()=>handleItemDelete(index)} className='deleteTrash'>❌</span>
                </div>
              )
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
