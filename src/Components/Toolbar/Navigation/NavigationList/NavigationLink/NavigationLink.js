import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './NavigationLink.scss'

const NavigationLink = (props) => {
    return (
        <NavLink exact to = {props.link}>
            <li className = 'Navitem'>{props.children}</li>
        </NavLink>
    )
}

NavigationLink.propTypes = {
    link : PropTypes.string,
    children : PropTypes.string
}

export default NavigationLink

