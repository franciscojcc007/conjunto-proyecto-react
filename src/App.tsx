import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = ()=>{
    setCount((count) => count + 1)
  }
  const handledelete = ()=>{
    setCount((count) => count - 1)
  }

  return (
    <>
      <h1>Vite + React + typescript</h1>
      <div className="card">
        <button onClick ={handledelete}>
          -
        </button>
        <button onClick ={handleClick}>
          +
        </button>
        <p className='text-paragraph'>
          el contador es {count}
        </p>
      </div>
    </>
  )
}

export default App
