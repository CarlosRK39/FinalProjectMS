import { Outlet } from 'react-router-dom'
import '../App.css'
import Header from '../Componentes/Header'


function RootLayout () {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        </>
    )
}
export default RootLayout