import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import '../index.css'

export const Nav = () => {
    return (
        <div className='sep'>
            <nav className='navbar homeContent'>
                <Link to="Jovy-React-Portfolio/">Home</Link>
                <Link to="Jovy-React-Portfolio/Projects">Projects</Link>
                <Link to="Jovy-React-Portfolio/Services">Services</Link>
                <Link to="Jovy-React-Portfolio/Contact">Contact</Link>

               
            </nav>
           
        </div>
    )
}
export default Nav