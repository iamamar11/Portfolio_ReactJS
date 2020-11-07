import React from 'react'
import NavigationLink from '../NavigationList/NavigationLink/NavigationLink'
import './NavigationList.scss'

const NavigationList = ( props ) => {
    return (
        <ul className = 'NavList'>
            <NavigationLink link = '/' >ABOUT</NavigationLink>
            <NavigationLink link = '/skill' >SKILLS</NavigationLink>
            {/* <NavigationLink link = '/' >PORTFOLIO</NavigationLink> */}
            {/* <NavigationLink link = '/' >EDUCATION</NavigationLink> */}
            {/* <NavigationLink link = '/' >INTEREST</NavigationLink> */}
            
        </ul>
    )
}

export default NavigationList
