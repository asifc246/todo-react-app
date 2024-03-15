import React from 'react'
import Header from './Components/Header'
import { useState } from 'react'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

function App() {

  const [todo,setTodo] = useState([])

  const newTodoAdd = (newTodo) =>{
    setTodo([newTodo,...todo])
  }

  const handleDelete = (id) =>{
    setTodo(todo.filter((item)=>item.id!==id))
  }

  const completeClick = (id) =>{
    let one = todo.filter((item)=>item.id===id)
    let newOne = {
      "input":one[0].input,
      "id":one[0].id,
      "completed":true
    }
    let without = todo.filter((item)=>item.id!==id)
    without.push(newOne)
    setTodo(without)
  }

  const [todoEdit,setTodoEdit] = useState({
    item:{},
    edit:false
  })

  const editTodo = (item) =>{
    setTodoEdit({
      item,
      edit:true
    })
  }

  const updateTodo = (id,updatedItem) =>{
    setTodo(todo.map((item)=>(item.id === id?{...item,...updatedItem}:item)))
  }

  

  console.log(todo,"---full--")
  return (
    <div className='container'>
      <Header/>
      <TodoForm handleAdd={newTodoAdd} todoEdit={todoEdit} updateTodo={updateTodo} setTodoEdit={setTodoEdit}/>
      <TodoList todo={todo} handleDelete={handleDelete} completeClick={completeClick} editTodo={editTodo}/>
    </div>
  )
}

export default App