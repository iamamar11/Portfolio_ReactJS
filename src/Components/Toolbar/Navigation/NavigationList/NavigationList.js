import React from 'react'
import NavigationLink from '../NavigationList/NavigationLink/NavigationLink'
import './NavigationList.scss'

const NavigationList = ( props ) => {
    return (
        <ul className = 'NavList'>
            <NavigationLink clicked={props.clicked} link = '/' >ABOUT</NavigationLink>
            <NavigationLink clicked={props.clicked} link = '/project' >PROJECT</NavigationLink>
            <NavigationLink clicked={props.clicked} link = '/education' >EDUCATION</NavigationLink>
            <NavigationLink clicked={props.clicked} link = '/skill' >SKILLS</NavigationLink> 
            <NavigationLink clicked={props.clicked} link = '/awards' >AWARDS</NavigationLink>  
        </ul>
    )
}

export default NavigationList
