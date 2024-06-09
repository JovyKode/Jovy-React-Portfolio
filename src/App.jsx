import React from 'react'
import Header from './components/Header.jsx'
import '../src/index.css'
import { Route, Routes } from 'react-router-dom'
import  Home from './components/Home.jsx'
import Nav from  './components/Nav.jsx'
import Projects from './components/Projects.jsx'
import Resume from './components/Resume.jsx'
import Services from './components/Services.jsx'
import Shop from './components/Shop.jsx'


function App() {
  

  return (
    <>
      <Header />
      <Nav />
      <Routes>
            {/*header nav*/}
            <Route path='/' element={<Home />} />
            <Route path='Shop' element={<Shop />}/>
            <Route path='Projects' element={<Projects />}></Route>
            <Route path='Resume' element={<Resume />}></Route>
            <Route path='Services' element={<Services />}></Route>
            {/*body nav*
            <Route path='Resume' element={<Resume />}/>
  <Route path='Contact' element={<Contact />}/>*/}
      </Routes>
    
    </>

  )
}

export default App
