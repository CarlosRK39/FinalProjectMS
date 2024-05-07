
import { Formulario } from './Componentes/formulario'
import { Home } from './Componentes/home.tsx'
import { useState } from 'react'
import './App.css'


function App() {
  const [user, setUser] = useState([])

  return (
    <>
  
  {
    //se utiliza un ternario para porder llamar la funcion de salida del sitio
   !user.length > 0
   ? <Formulario setUser={setUser} />
   : <Home user = {user}  setUser={setUser} /> 
  }
  
   </> 
  )
}


export default App
