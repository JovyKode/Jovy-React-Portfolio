import React from 'react'
import Header from './components/Header.jsx'
import '../src/index.css'
import { Route, Routes } from 'react-router-dom'
import  Home from './components/Home.jsx'
import Nav from  './components/Nav.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'


function App() {
  

  return (
    <div className='image-container'>
      <Header />
      <Nav />
      <Routes>
            <Route path='Jovy-React-Portfolio//' element={<Home />}  />
            <Route path='Jovy-React-Portfolio/Contact' element={<Contact />}/>
            <Route path='Jovy-React-Portfolio/Projects' element={<Projects />}></Route>
            <Route path='Jovy-React-Portfolio/Services' element={<Services />}></Route>
            
      </Routes>
      <Home />
      <div className='bottom-header'>WEBSITE UNDER CONSTRUCTION </div>
    </div>

  )
}

export default App
