import React from 'react';
import './Style.css';
import '../index.css';
import cssIntroImg from '../assets/css_Intro.png';  // Import the image correctly
import javaIntermImg from '../assets/Java_Interm.png';
import jsIntroImg from '../assets/JS_Intro.png';
import jsIntermImg from '../assets/JS_Interm.png';
import sqlIntroImg from '../assets/SQL_Intro.png';
import sqlIntermImg from '../assets/SQL_Interm.png';
import htmlImg from '../assets/html.png';

const Home = () => {
    return (
        <main>
            <div className='homeContent'>
                <h3>WELCOME.</h3>
                <p>Hello, I'm Jowayne, a dedicated developer with a passion for creating innovative solutions. While my primary focus lies in frontend development, I consider myself a full-stack developer with a strong interest in backend development. My ultimate goal is to specialize in backend development, where I can leverage my skills in server-side knowledge and data manipulation to drive meaningful results.

Prior to exploring various coding fields, my initial fascination was with cybersecurity concepts. This foundation has provided a solid understanding of the importance of secure development practices, which I strive to incorporate into my work. 
                    <br /><br />
                   
                </p>
                <h3>General Overview</h3>
                <p>
                    The General overview of this site is solely referring to looks and use of
                    this site. There is a main section which is my portfolio and another extra 
                    section called Shop.
                </p>   
                <ul><br />
                    Portfolio :
                    <li>Home</li>
                    <p>This page you're looking at which gives an introduction on how this site operates.</p>
                    <li>Projects</li>
                    <p>Consists of the projects I have worked on based on free will and interest.</p>
                    <li>Services</li>
                    <p>Services I provide and contact info</p>
                                
                </ul>   

                <h3>Certificates</h3>
                <p>These are certificates I earned by studying coding concepts and languages.</p>
                <div className='image-grid'>
                    <img src={cssIntroImg} alt="CSS Intro Certificate" />
                    <img src={javaIntermImg} alt="Java Intermediate Certificate" />
                    <img src={jsIntroImg} alt="JavaScript Intro Certificate" />
                    <img src={jsIntermImg} alt="JavaScript Intermediate Certificate" />
                    <img src={sqlIntroImg} alt="SQL Intro Certificate" />
                    <img src={sqlIntermImg} alt="SQL Intermediate Certificate" />
                    <img src={htmlImg} alt="HTML Intro Certificate" />
                </div>
            </div>
        </main>
    );
}

export default Home;
