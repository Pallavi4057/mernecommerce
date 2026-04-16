import React from 'react'
import Register from './components/Register'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Navbar from './components/Navbar'

export default function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path='/register' element ={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}