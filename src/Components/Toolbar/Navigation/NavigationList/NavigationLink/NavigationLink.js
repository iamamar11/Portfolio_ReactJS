import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './NavigationLink.scss'

const NavigationLink = (props) => {
    return (
        <Link to = {props.link}>
            <li className = 'Navitem'>{props.children}</li>
        </Link>
    )
}

NavigationLink.propTypes = {
    link : PropTypes.string,
    children : PropTypes.string
}

export default NavigationLink

