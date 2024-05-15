import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

import { Contacto } from './Contact/contacto.tsx'
import Formulario, { loader as formularioloader } from './Componentes/formulario.tsx'
import RootLayout from './Routes/RoutesLayout.tsx'

const routerConfig = createBrowserRouter ([

  { path: "/", element: <RootLayout/>, children:
    [

      { path: "/", element: <App/>},
      { path: "/Contacto", element: <Contacto/>},
      { path: "/Formulario", element: <Formulario/>, loader: formularioloader }

    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {routerConfig}></RouterProvider>
  </React.StrictMode>,
)
