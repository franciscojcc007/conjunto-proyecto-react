import './presentation.css'
import { User } from '../user/User.tsx'


export const Presentation =()=> {
  return (
    <header>
      <h1>curso comenzado por frank</h1>
      <User name= 'frank' age= {35} country = 'R.Dominicana'/>
      <User name= 'ana' age= {32} country = 'Haiti'/>
      <User name= 'ales' age= {45} country = 'R.Dominicana'/>
    </header>
  )
}


