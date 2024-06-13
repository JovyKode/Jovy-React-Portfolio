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
    <>
      <Header />
      <Nav />
      <Routes>
            {/*header nav*/}
            <Route path='/' element={<Home />} />
            <Route path='Contact' element={<Contact />}/>
            <Route path='Projects' element={<Projects />}></Route>
            <Route path='Services' element={<Services />}></Route>
           
      </Routes>
      <div className='bottom-header'>WEBSITE UNDER CONSTRUCTION </div>
    </>

  )
}

export default App
