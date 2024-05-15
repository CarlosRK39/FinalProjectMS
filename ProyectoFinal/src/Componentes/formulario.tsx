
import './style.css'
import { useState } from 'react'
import '../App.css'

//iniciamos aplicación 
export function Formulario({ setUser } : any) {
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)
//Aqui declaramos  constante para manejar los datos que se piden y mostrar error en caso de no ingresar los datos
    const handleSubmit = (e: any) => {
        e.preventDefault()

        if(nombre === "" || contraseña === ""){
            setError(true)
            return
        }
        setError(false)

        setUser([nombre])
    }

    return ( 
        <section>
            <h1>Ingreso</h1>
            <form className='formulario' onSubmit={handleSubmit}>
                Usuario:
                <input 
                    type="text"
                    placeholder='Usuario'
                    value={nombre}
                    onChange={e => setNombre (e.target.value)}
                />
                Contraseña:
                <input 
                    type="password"
                    placeholder='Contraseña'
                    value={contraseña}
                    onChange={e => setContraseña(e.target.value)}
                />

                <button>Iniciar Sesión</button>
            </form>
            {error && <p>Todos los Campos son Obligatorios**</p>}
        </section>
    )
}
 export default Formulario

 export async function loader({params}: any) {
    //
    return params.nombre
}