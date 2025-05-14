
import { useState } from "react"
import { Button } from "../button/Button.js"

export const Contador = () =>{

  const [count, setCount] = useState(0)
  
  const handleClick =()=>{
    setCount((count)=> count + 1)
  }

   const handledelete =()=>{
    setCount((count)=> count - 1)
  }

  return(
    <section>
      <h2>contador</h2>
      <p className="count">{count}</p>
      <Button label="-" parentMethod={handledelete} />
      <Button label="+" parentMethod={handleClick} />
    </section>
  )
}

