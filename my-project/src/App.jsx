import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const onj={
    username:"Pratik",
    age:21
  }
  return (
    <>
    <h1 className=' bg-green-400 text-black p-4 mb-4'>Tailwind CSS and React</h1>
    <Card username="Somnath" />
    <Card username={onj.username}/>

    </>
  )
}

export default App
