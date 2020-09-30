import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Layout.scss'
import Toolbar from '../../Components/Toolbar/Toolbar'
import SideDraw from '../../Components/Navigation/SideDraw/SideDraw'

export class Layout extends Component {
    constructor(props){
        super()
        this.state = {showSideDraw : false}
    }
    
    ToggleSideDraw = () => {
        this.setState({ showSideDraw : !this.state.showSideDraw });        
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar toggle = {this.ToggleSideDraw}/>
                <SideDraw show = {this.state.showSideDraw} close = {this.ToggleSideDraw}/>
                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout
