import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./component/layout/layout"
import Home from "./component/HOme/Home"
import Portfolio from "./component/Portfolio/Portfolio"
import About from "./component/About/About"
import Contact from './component/Contact/Contact';

function App() {
  const router = createBrowserRouter([

    {
      path: "", element: <Layout />, children: [
        { path: "", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio /> }

      ]
    },
    { path: "*", element: <div><h1>Error 404</h1> <h1>Page Not Found</h1></div> }
  ])


  return (
    <>

      <RouterProvider router={router} />


    </>
  )
}

export default App
