import React from 'react'
import TodoListItem from './TodoListItem'

function TodoList({todo,handleDelete,completeClick,editTodo}) {
  return (
    <div>
      {todo.map((item)=>(
        <TodoListItem item={item} handleDelete={handleDelete} completeClick={completeClick} editTodo={editTodo}/>
      ))}
    </div>
  )
}

export default TodoList
