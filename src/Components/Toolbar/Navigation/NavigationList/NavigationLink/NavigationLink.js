import React from 'react'
import PropTypes from 'prop-types'
import './NavigationLink.scss'

const NavigationLink = (props) => {
    return (
        <li className = 'Navitem'>
           <a href = {props.link}>{props.children}</a> 
        </li>
    )
}

NavigationLink.propTypes = {
    link : PropTypes.string,
    children : PropTypes.string
}

export default NavigationLink

