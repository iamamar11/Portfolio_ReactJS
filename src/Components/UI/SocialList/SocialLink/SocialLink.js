import React from 'react';
import './SocialLink.scss'


function SocialLink(props) {
    return (
        <div className='backgroundDiv'>
            <li className='socialLink'><a href={props.link} style={{color:"black"}} target="_blank" rel="noopener noreferrer" >{props.children}</a></li>
        </div>
    )
}

export default SocialLink
