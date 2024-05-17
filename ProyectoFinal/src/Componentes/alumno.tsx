

/**import { Link } from 'react-router-dom'**/
import { Formulario } from './formulario'
import { Home } from './home'
import { useState } from 'react'

export function Estudiante() {

    const [user, setUser] = useState([])

    return(
        <>
        <h2>Alumno</h2>


            <div>    
                { 
                    !user.length > 0
                    ?<Formulario setUser={setUser}/>
                    :<Home user={user} setUser={setUser}/>
                }
            </div> 

        </>
    )
}