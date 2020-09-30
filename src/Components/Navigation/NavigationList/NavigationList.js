import React from 'react'
import NavigationLink from '../NavigationList/NavigationLink/NavigationLink'
import './NavigationList.scss'

const NavigationList = (props) => {
    return (
        <ul className = 'NavList'>
            <NavigationLink link = '/' >Home</NavigationLink> 
            <NavigationLink link = '/' >Portfolio</NavigationLink> 
            <NavigationLink link = '/' >Contact Me</NavigationLink> 
        </ul>
    )
}

export default NavigationList
