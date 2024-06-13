import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import '../index.css'

export const Nav = () => {
    return (
        <div className='sep'>
            <nav className='navbar homeContent'>
                <Link to="/">Home</Link>
                <Link to="Projects">Projects</Link>
                <Link to="Services">Services</Link>
                <Link to="Contact">Contact</Link>

               
            </nav>
           
        </div>
    )
}
export default Nav