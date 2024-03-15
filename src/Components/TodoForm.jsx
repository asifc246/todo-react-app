import React, { useState,useEffect } from 'react'
import {v4 as uuid} from 'uuid'

function TodoForm({handleAdd,todoEdit,updateTodo,setTodoEdit}) {

    const [input,setInput] = useState('')

    useEffect(()=>{
      if(todoEdit.edit === true){
        setInput(todoEdit.item.input)
      }
    },[todoEdit])

    const handleChange = (e)=>{
        setInput(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newTodo = {
            input,"id":uuid(),
            "completed":false
        }
        if(todoEdit.edit === true){
          updateTodo(todoEdit.item.id,newTodo)
          setTodoEdit('')
        }
        else{
          handleAdd(newTodo)
        }
        setInput('')
    }
    
  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={input}/>
      <button type='submit' >{todoEdit.edit === true ? 'Edit Task':'Add Task'}</button>
      </form>
    </div>
  )
}

export default TodoForm
