import axios from 'axios'

const url = "https://guru-stodo-server.onrender.com"

const getAllTodo = (setTodo) => {
    axios
    .get(url)
    .then(({data}) => {
        setTodo(data)
    })
    .catch((err) => console.log(err))
}

const addTodo = (text,setText,setTodo) => {
    axios
    .post(`${url}/set`,{text})
    .then(() => {
        setText("")
        getAllTodo(setTodo)
    })
    .catch((err) => console.log(err))
}

const deleteTodo = (_id,setTodo) => {
    axios
    .post(`${url}/delete`,{_id})
    .then(() => {
        getAllTodo(setTodo)
    })
    .catch((err) => console.log(err))
}

const updateTodo = (toDoId,text,setTodo,setText,setIsUpdating) => {
    axios
    .post(`${url}/update`,{_id: toDoId,text})
    .then(() => {
        setText("")
        setIsUpdating(false)
        getAllTodo(setTodo)
    })
    .catch((err) => console.log(err))
}

export {getAllTodo , addTodo , updateTodo , deleteTodo}