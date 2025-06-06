import { useState } from 'react'
import './App.css'
import '@fontsource/space-mono'
import '@fontsource/silkscreen'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './p.components/navbar'
import Landing from './components/landing'
import Signup from './components/signup'
import About from './components/about'
import Sign_in from './components/sign_in'

function App() {

  return (

    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Landing />} />
         <Route path="/home" element={<Landing/>}/>
         <Route path='/sign-up' element={<Signup/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/sign-in' element={<Sign-in/>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App
