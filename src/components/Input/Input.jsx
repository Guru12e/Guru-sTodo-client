import { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import { addTodo, deleteTodo, getAllTodo, updateTodo } from "../utils/apis";

const Input = () => {
  const [text,setText] = useState("")
  const [todo,setTodo] = useState([])
  const [isUpdating,setIsUpdating] = useState(false)
  const [todoId,setTodoId] = useState("") 
  useEffect(() => {
    getAllTodo(setTodo)
  },[])
  
  const updateMode = (_id,text) => {
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }

  return (
    <div className="w-[100%]">
        <div className="w-[100%] grid grid-cols-3 gap-7 py-4 px-5">
            <input placeholder="Enter Your Todo" className="col-span-2 bg-blue-300 hover:bg-white placeholder:text-black border border-white p-2 rounded-md focus:outline-none focus:bg-white" value={text} onChange={(e) => {setText(e.target.value)}}/>
            <button className="border-2 border-white rounded-md text-white uppercase hover:text-blue-300 hover:bg-white" onClick={isUpdating ? () => updateTodo(todoId,text,setTodo,setText,setIsUpdating) :
            () => addTodo(text,setText,setTodo)}>
            {isUpdating ? "Update " : "Add " }Todo</button>
        </div>
        <div className="todo-list">
            {todo.map(item => 
              <Todo 
              key={item._id} 
              text={item.text} 
              updateMode = {() => updateMode(item._id,item.text)} 
              deleteMode = {() => deleteTodo(item._id,setTodo)}/>
            )}
        </div>
    </div>
  )
}

export default Input