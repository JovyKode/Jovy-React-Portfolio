//Header
import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
import ig_icon from '../assets/ig-instagram-icon.png'
import linkedin from '../assets/linkedin-app-icon.png'
import twit from '../assets/x-social-media-logo-icon.png'
import github from '../assets/github-icon.png'


const  Header = () => {
    return (
        <>
            <header >
                <div  className='header'>
                    
                    <Link className="logo" to={"/"}>JOVY</Link>  
                    <button className='social-button'>Socials</button>
                  
                </div>
               
            </header>
           
        </>
    )
}





export default Header

