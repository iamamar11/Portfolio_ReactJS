import React, { Component } from 'react'
import './Toolbar.scss'
import NavigationList from './Navigation/NavigationList/NavigationList'
import Logo from './Navigation/Logo/Logo'
import Hamburger from '../UI/Hamburger/Hamburger'


export class Toolbar extends Component {
    render() {
        return (
            <header className = 'Toolbar'>
                <Hamburger toggle = {this.props.toggle}/>
                
                <div className = 'Logo'>
                    <Logo/>
                </div>

                <nav className = 'NavigationDesktop'>
                    <NavigationList/>
                </nav>
            </header>
        )
    }
}

export default Toolbar
