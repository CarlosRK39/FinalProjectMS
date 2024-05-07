

export function Home({user, setUser} : any){
    const handleLogout = () => {
        setUser([])
    }
    //se utiliza un boton para poder cerrar la sesión del log in
    return(
        <div>
            <h1>Bienvenido</h1>
            <h2>{user}</h2>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    )
}