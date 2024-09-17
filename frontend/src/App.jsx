import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'

function App() {
  return (
    <div className=' mx-4 sm:mx-[10%]'>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App