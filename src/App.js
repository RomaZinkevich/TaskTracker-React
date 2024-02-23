import React from 'react';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter} from 'react-router-dom'
import About from './components/About';
import Homepage from './components/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path:"/about",
    element:<About></About>
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;