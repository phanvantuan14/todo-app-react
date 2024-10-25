import React from 'react'

export function Header(props) {
   const { todos } = props
   const todosLength = todos.length
   const isTaskPural = todos.length != 1
   const taskOrTasks = isTaskPural ? 'tasks' : 'task'
   return (

      <header>
         <h1 className='text-gradient'>You have {todosLength} open {taskOrTasks}</h1>
      </header>
   )
}

