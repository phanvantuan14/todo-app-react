import { useState } from 'react'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([])

  const [selectedTab, setSelectedTab] = useState('Open')


  const generateRandomID = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = '';
    for (let i = 0; i < 30; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  function handleAddTodo(newTodo) {
    const idRandom = generateRandomID()
    const newTodoList = [...todos, { id: idRandom, input: newTodo, completed: false }]

    setTodos(newTodoList)
  }

  function handelCompletedTodo(id) {
    let newTodoList = [...todos]

    todos.filter((todo) => {

      if (todo.id === id) {
        let completedTodo = todo
        completedTodo['completed'] = true
        newTodoList[id] = completedTodo
      }
    })

    setTodos(newTodoList)
  }

  function handleDeleteTodo(id) {
    const newTodoList = todos.filter(todo => todo.id !== id);
    setTodos(newTodoList);
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleDeleteTodo={handleDeleteTodo}
        handelCompletedTodo={handelCompletedTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
