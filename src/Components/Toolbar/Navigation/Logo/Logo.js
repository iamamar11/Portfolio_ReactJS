import React from 'react'
// import LogoImg from '../../../../Assets/Images/portfolio.jpg';
import './Logo.scss'

const Logo = (props) =>{
    return (
        <>
            <img src = {props.image} alt='logo' className = 'logo'/>
        </>
    )
}

export default Logo
