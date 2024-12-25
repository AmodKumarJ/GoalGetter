import React from 'react'
import Signup from './Components/signup'
import Signin from './Components/Signin'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router'

import Home from './Components/Home'
import ProtectedRoute from './Components/protectedRoute'
import RootLayout from './Components/RootLayout'
import Completed from './Components/Completed'
import Personal from './Components/Personal'
import Work from './Components/Work'
import Analytics from './Components/Analytics'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={
          <ProtectedRoute>
              <Home />
          </ProtectedRoute>
          
        } />
        <Route path='personal' element={
          <ProtectedRoute>
             <Personal />
          </ProtectedRoute>
        } />
        <Route path='work' element={
          <ProtectedRoute>
             <Work />
          </ProtectedRoute>
        } />
        <Route path='analytics' element={
          <ProtectedRoute>
             <Analytics />
          </ProtectedRoute>
        } />
        <Route path='completed' element={
          <ProtectedRoute>
             <Completed />
          </ProtectedRoute>
        } />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        
      </Route>
    )
  )
  return <RouterProvider router={router}/>
}

export default App
