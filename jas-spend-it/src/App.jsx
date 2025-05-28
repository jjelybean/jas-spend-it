import { useState } from 'react'
import './App.css'
import '@fontsource/space-mono'
import '@fontsource/silkscreen'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './p.components/navbar'
import Landing from './components/landing'


function App() {

  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Landing/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
