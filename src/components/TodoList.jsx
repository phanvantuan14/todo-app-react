import React from 'react'
import { TodoCard } from './TodoCard'

export function TodoList(props) {
   const { todos, selectedTab } = props

   const filterTodoList = selectedTab === 'All' ?
      todos :
      selectedTab === 'Completed' ?
         todos.filter(val => val.completed) :
         todos.filter(val => !val.completed)
   return (
      <>
         {filterTodoList.map((todo, todoIndex) => {
            console.log(todo.id)
            return (
               <TodoCard
                  key={todoIndex}
                  todoId={todo.id}
                  todo={todo}
                  {...props}
               />
            )
         })}
      </>
   )
}
