import React from 'react'
import Backdrop from '../../../UI/Backdrop/Backdrop'
import Logo from '../Logo/Logo'
import NavigationList from '../NavigationList/NavigationList'
import MyImage from '../../../../Assets/Images/portfolio.jpg'
import './SideDraw.scss'

const SideDraw = ( props ) => {

    let classAttached = ['SideDraw', 'Close'];

    if(props.show){
        classAttached = ['SideDraw', 'Open']
    }

    return (
        <React.Fragment>
            <Backdrop clicked = {props.close} show = {props.show}/>
            <div className = {classAttached.join(' ')}>
                <section className='sideDrawSection'>
                    <div className = 'logoSideDraw'>
                        <Logo image = {MyImage}/>
                    </div>
                    <nav className = 'navSideDraw'>
                        <NavigationList />
                    </nav>
                </section>
            </div>
        </React.Fragment>
    )
}

export default SideDraw
