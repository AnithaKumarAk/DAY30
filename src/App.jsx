import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Todos from './pages/Todos'
import { loader as Todoloader } from './pages/Todos'
//1.Create a router object 
const router = createBrowserRouter ([
{
  path : '/',
  element : <Todos />, 
  //link the loader function to the route 
  loader : Todoloader
}
])

//2. router provider
const App = () => {
  
  return <RouterProvider router={router}/>
   
}

export default App