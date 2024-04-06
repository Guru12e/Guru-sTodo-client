import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Todo = ({text,updateMode,deleteMode}) => {
  return (
    <div className="flex w-[90%] justify-between items-center mb-5 text-blue-900 mx-auto p-2 bg-white text-lg rounded-md">
        <h1>{text}</h1>
        <div className="flex gap-2">
            <FaEdit className="cursor-pointer" onClick={updateMode}/>
            <MdDelete className="cursor-pointer" onClick={deleteMode}/>
        </div>
    </div>
  )
}

export default Todo