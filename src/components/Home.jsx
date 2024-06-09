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
                <p>Hello my name is Jowayne and am a developer.
                    what kind of developer you may ask, well
                    am focusing on frontend but i would classify myself as full stack
                    but my main goal is backend for it 
                    has to delve mostly in serverside knowledge with the 
                    manipulation of data and so on. I like doing cyber security 
                    concepts for it was my first interest before i learnet about 
                    other coding fields as in frontend, backend, mobile development 
                    , games and etc. I shamefully admit i am just starting out to hold my 
                    foot stead fast in showing what i can do. i believe in this modern 
                    time that i can do anything as long as you give me enough time 
                    and i'll get it done on time.  
                    <br /><br />
                    Qoute : having nothing to do leaves your mind vulnerable to depression 
                    and other mental illness because of and unoccupied brain.
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

                <h3>Resume</h3>
                <p>Here is my resume for any body asking along with my working status.</p>
                <p>Working status : unenployed </p>
                <p>Seeking job : Always </p>
                <p>Resume : </p>

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
