import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Notification from "./components/Notification"
import Dashboard from "./views/Dashboard"
import Formulario from "./views/Formulario"

const router = createBrowserRouter([
  {
    index: true,
    element: <Formulario />
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <Notification />
      <RouterProvider router={router} />
    </>
  )
}

export default App
