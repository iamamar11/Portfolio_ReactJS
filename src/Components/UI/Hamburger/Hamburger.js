import React from 'react'
import './Hamburger.scss'

const Hamburger = (props) => {
    return (
        <div className = 'Hamburger' onClick = {props.toggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Hamburger
