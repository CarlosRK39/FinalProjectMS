import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

import { Contacto } from './Contact/contacto.tsx'
import {Formulario}  from './Componentes/formulario.tsx'

import RootLayout from './Routes/RoutesLayout.tsx'
import { Contenido } from './Componentes/Nosotros.tsx'
import { Clases } from './Componentes/Cursos.tsx'
import {  Estudiante } from './Componentes/alumno.tsx'
import { Home } from './Componentes/home.tsx'

const routerConfig = createBrowserRouter ([

  { path: "/", element: <RootLayout/>, children:
    [

      { path: "/", element: <App/>},
      { path: "/Contacto", element: <Contacto/>},
      { path: "/Formulario", element: <Formulario/>},
      { path: "/Nosotros", element: <Contenido/>},
      { path: "/Cursos", element: <Clases/>},
      {path: "/Alumno", element: <Estudiante/> },
      {path: "/home", element: <Home/> }

    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(

    <RouterProvider router = {routerConfig}></RouterProvider>
 
)
