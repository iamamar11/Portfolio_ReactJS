import React from 'react'
import SocialLink from './SocialLink/SocialLink'
import './SocialList.scss';

function SocialList() {
    return (
        <ul className='socialList'>
            <SocialLink link = 'https://www.linkedin.com/in/iamamarjit' ><i className="fab fa-linkedin-in fa-2x"></i></SocialLink>
            <SocialLink link = 'https://github.com/iamamar11' ><i className="fab fa-github fa-2x"></i></SocialLink>
            <SocialLink link = 'https://stackoverflow.com/users/9443835/amarjit' ><i className="fab fa-stack-overflow fa-2x"></i></SocialLink>
        </ul>
    )
}

export default SocialList
