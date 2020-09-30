import React from 'react'
import LogoImg from '../../../../Assets/Images/favicon.png';
import './Logo.scss'

const Logo = () =>{
    return (
        <>
            <img src = {LogoImg} alt='logo' className = 'logo'/>
        </>
    )
}

export default Logo
