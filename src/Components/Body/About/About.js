import React from 'react'
import SocialList from '../../UI/SocialList/SocialList'
import './About.scss'

const About = () => {
    return (
        <div className='aboutDiv'>
            <h1 className='fullname'>Amarjit <span style={{color : '#BD5D38'}}>Singh</span></h1>
            <span className='contactInfo'><a href="tel:+1-438-921-8827" style={{color : "#6C757D"}} title='make a call to Amarjit'>(438)-921-8827</a> &middot; <a href='mailto: iamamarjit95@gmail.com' style={{color : "#BD5D38"}} title='Send email to Amarjit'>iamamarjit95@gmail.com</a>  &middot; 4000 Avenue Dupuis, Montreal, H3T-1E8</span>
            <h4 className='description'>Experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</h4>
            <SocialList />
        </div>
    )
}

export default About
