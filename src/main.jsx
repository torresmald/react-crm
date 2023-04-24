import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, {action as enviarFormulario} from './pages/NuevoCliente'
import Index, {loader as clientesLoader} from './pages/Index'
import EditarCliente, { loader as editarCliente, action as editarClienteAction } from './components/EditarCliente'
import {  action as deleteClienteAction } from './components/Cliente';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader
      }
      , {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: enviarFormulario
      },{
        path: '/clientes/:id/editar',
        element: <EditarCliente />,
        loader: editarCliente,
        action: editarClienteAction
      },
      {
        path: 'clientes/:id/eliminar',
        action: deleteClienteAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
