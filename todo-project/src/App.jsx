import { useEffect, useState } from 'react'
import './App.css'
import {TodoProvider} from './context'
import TodoForm from './components/Todofrom'
import TodoItem from './components/Todoitem'

function App() {
  
  const [todos, setTodos] = useState([])
  const addTodo=(todo)=>{
      setTodos((prev) => [{id:Date.now(),...todo},...prev])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!==id))
  }
  const completeTodo=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }
  useEffect(()=>{
    const stor=JSON.parse(localStorage.getItem("todos"));
    if(stor && stor.length>0){
        setTodos(stor)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,completeTodo}}>
     <div className="bg-[#172842] min-h-screen py-10 absolute min-w-full left-0 top-0">
                <div className="w-full max-w-2xl bg-slate-600 mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
