import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import '../index.css'

export const Nav = () => {
    return (
        <>
            <div className='sep'>
                <nav className='navbar homeContent'>
                    <Link to="Jovy-React-Portfolio/">Home</Link>
                    <Link to="Jovy-React-Portfolio/Projects">Projects</Link>
                    <Link to="Jovy-React-Portfolio/Services">Services</Link>
                    

                
                </nav>
            
            </div>
            <div className='navIcon' >
                <div className="dropdown">
                    <button className="dropbtn">
                        <span class="line line-1"></span>
                        <span class="line line-2"></span>
                        <span class="line line-3"></span>
                    </button>
                    <div className="dropdown-content">
                        <Link to="Jovy-React-Portfolio/">Home</Link>
                        <Link to="Jovy-React-Portfolio/Projects">Projects</Link>
                        <Link to="Jovy-React-Portfolio/Services">Services</Link>
                        <Link to="Jovy-React-Portfolio/Contact">Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nav