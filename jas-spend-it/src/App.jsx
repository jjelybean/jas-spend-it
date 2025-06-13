import { useState, useEffect } from 'react'
import './App.css'
import '@fontsource/space-mono'
import '@fontsource/silkscreen'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './p.components/navbar'
import LoggedIn_nav from './p.components/loggedIn_nav'
import Landing from './components/landing'
import Signup from './components/signup'
import About from './components/about'
import Sign_in from './components/sign_in'
import Dashboard from './components/dashboard'
import New_expense from './components/new_expense'
import ProtectedRoute from './components/secureRoutes'
import Budget from './components/budget'
import Goals from './components/goals'

import supabase from './supabaseClient'

function App() {

  const [session, setSession] = useState(null);

    useEffect(() => {
    // Get the initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

     const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Clean up listener on unmount
    return () => authListener.subscription.unsubscribe();
  }, []);


  return (

    <Router>
      {session ? <LoggedIn_nav user={session.user} /> : <Navbar />}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
         <Route path="/home" element={<Landing/>}/>
         <Route path='/sign-up' element={<Signup/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/sign-in' element={<Sign_in/>}></Route>
          <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
         <Route path='/new-expense' element={<New_expense/>}></Route>
        <Route path="/add-budget" element={<Budget/>}/>
         <Route path='/goals' element={<Goals/>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App
