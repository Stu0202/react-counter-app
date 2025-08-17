import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp'
import { MyAwesomeApp } from './MyAwesomeApp'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <h1>Carrito de Compras</h1>
    <FirstStepsApp />
    <FirstStepsApp />
    <FirstStepsApp />
    {/* <MyAwesomeApp /> */}

  </React.StrictMode>,
)
