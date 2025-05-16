import { useState } from "react"
import { Button } from "../button/Button.js"

export const Count = () => {
  const [count, setCount] = useState<number>(0);

  
  const handleClick =()=>{
    setCount((count)=> count + 1)
  }

  const deleteOnlyItem =()=>{
    if(count > 0){
      setCount((count)=> count - 1)
    }
  }

  return(
    <section>
      <h2>contador</h2>
      <p className="count">{count}</p>
      <Button label="-" parentMethod={deleteOnlyItem} />
      <Button label="+" parentMethod={handleClick} />
    </section>
  )
}


