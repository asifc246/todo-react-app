import React from 'react'
import {FaTimes,FaCheck,FaEdit } from 'react-icons/fa'

function TodoListItem({item,handleDelete,completeClick,editTodo}) {

    

  return (
    <div className='list-items'>
      <div><h1 className={item.completed===true ? `strike`:`none`}>{item.input}</h1></div>
      <div><button onClick={()=>(completeClick(item.id))}><FaCheck/></button></div>
      <div><button onClick={()=>(editTodo(item))}><FaEdit/></button></div>
      <div><span onClick={()=>(handleDelete(item.id))}><FaTimes/></span></div>
    </div>
  )
}

export default TodoListItem
