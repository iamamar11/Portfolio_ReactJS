import React from 'react';
import './SocialLink.scss'


function SocialLink(props) {
    return (
        <div className='backgroundDiv'>
            <li className='socialLink'><a href={props.link} style={{color:"black"}} >{props.children}</a></li>
        </div>
    )
}

export default SocialLink
