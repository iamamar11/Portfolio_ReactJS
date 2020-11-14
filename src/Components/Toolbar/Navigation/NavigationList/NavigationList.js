import React from 'react'
import NavigationLink from '../NavigationList/NavigationLink/NavigationLink'
import './NavigationList.scss'

const NavigationList = ( props ) => {
    return (
        <ul className = 'NavList'>
            <NavigationLink link = '/' >ABOUT</NavigationLink>
            <NavigationLink link = '/project' >PROJECT</NavigationLink>
            <NavigationLink link = '/education' >EDUCATION</NavigationLink>
            <NavigationLink link = '/skill' >SKILLS</NavigationLink> 
            <NavigationLink link = '/awards' >AWARDS</NavigationLink>  
        </ul>
    )
}

export default NavigationList
