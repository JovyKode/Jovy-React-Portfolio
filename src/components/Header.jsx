import React, { useState } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
import ig_icon from '../assets/ig-instagram-icon.png';
import linkedin from '../assets/linkedin-app-icon.png';
import github from '../assets/github-icon.png';

const Header = () => {
  const [showSocialDropdown, setShowSocialDropdown] = useState(false);

  const drop = () => {
    setShowSocialDropdown(!showSocialDropdown);
  };

  return (
    <>
      <header>
        <div className='header'>
          <Link className="logo" to={"/"}>JOVY</Link>
          <button className='social-button' onClick={drop}>Socials</button>
          {showSocialDropdown && (
            <div className='socialdrop'>
              {/*ig */}
             

              {/*github */}
              <a href="https://github.com/JovyKode">
                <div>
                  <img src={github} alt='github'/>
                  Jovykode
                </div>
              </a>

              {/*linkedin */}
              <a href="https://www.linkedin.com/in/nathaniel-henry-b14a14240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <div>
                  <img src={linkedin} alt='linkedin'/>
                  <span style={{marginLeft : 5}}>jowayne</span>
                </div>
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;