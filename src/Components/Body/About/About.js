import React from 'react'
import SocialList from '../../UI/SocialList/SocialList'
import './About.scss'
import resume from '../../../Assets/Amar.pdf';

const About = () => {
    return (
        <div className='aboutDiv'>
            <h1 className='fullname'>Amarjit <span style={{color : '#BD5D38'}}>Singh</span></h1>
            <span className='contactInfo'>
                <a href="tel:+1-438-921-8827" style={{color : "#6C757D"}} title='make a call to Amarjit'>(438)-921-8827</a> &middot;
                <a href='mailto: iamamarjit95@gmail.com' style={{color : "#BD5D38"}} title='Send email to Amarjit'> iamamarjit95@gmail.com </a>&middot;
                4000 Avenue Dupuis, Montreal, H3T-1E8
            </span>
            <h4 className='description'>Enthusiastic and Detail-oriented Web Developer, specializing in Front end development with React library. Good practical and Supportive skill to work as a team player. Eager to learn more about web development technologies. Looking forward to join reputative company to start my professional career as a web developer.</h4>
            <SocialList />
            <div className='downloadSection'>
                <a href={resume} download ><button className='downloadResume'>Download Resume</button></a>
            </div>
        </div>
        
    )
}

export default About
