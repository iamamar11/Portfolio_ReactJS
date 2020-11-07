//! This component will display basic overall layout and the Routing for the switching of the other components

import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types'
import './Layout.scss'
import Toolbar from '../../Components/Toolbar/Toolbar'
import SideDraw from '../../Components/Toolbar/Navigation/SideDraw/SideDraw'
import About from '../../Components/Body/About/About'
// import Skills from '../../Components/Body/Skills/Skills'
// This is code-splitting tecnique to make it render when user visit this component
const Skills = React.lazy( () => import('../../Components/Body/Skills/Skills') )

export class Layout extends Component {
    constructor(props){
        super()
        this.state = {showSideDraw : true}
    }
    
    ToggleSideDraw = () => {
        this.setState({ showSideDraw : !this.state.showSideDraw });        
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                <Toolbar toggle = {this.ToggleSideDraw}/>
                <div className = 'BodyDisplay'>

                {/* Using Router module here */}

                    <SideDraw show = {this.state.showSideDraw} close = {this.ToggleSideDraw}/>
                    <section className = "Content">
                        <Switch>
                            <Route path = '/' exact component = {About}/>
                            {/* <Route path = '/skill' component = {Skills}/> */}
                            <Route path = '/skill' render = {() => (
                                <Suspense fallback={<div>Loading... </div>}>
                                    <Skills/>
                                </Suspense>
                            )} />
                        </Switch>
                    </section>
                
                </div>
                </Router>
            </React.Fragment>
        )
    }
}

export default Layout
