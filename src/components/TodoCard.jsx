import React from 'react'

export function TodoCard(props) {
   const { todoId, todo,
      handleDeleteTodo, handelCompletedTodo } = props


   return (
      <div className='card todo-item'>
         <p>{todo.input}</p>
         <div className='todo-buttons'>
            <button
               onClick={() => {
                  handelCompletedTodo(todoId)
               }}
               disabled={todo.completed}
            >
               <h6>Done</h6>
            </button>
            <button
               onClick={() => {
                  handleDeleteTodo(todoId)
               }}
            >
               <h6>Delete</h6>
            </button>
         </div>
      </div>
   )
}
