//! This component will display basic overall layout and the Routing for the switching of the other components

import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types'
import './Layout.scss'
import Toolbar from '../../Components/Toolbar/Toolbar'
import SideDraw from '../../Components/Toolbar/Navigation/SideDraw/SideDraw'
import About from '../../Components/Body/About/About'
import Spinner from '../../Components/UI/Spinner/Spinner';
// import Skills from '../../Components/Body/Skills/Skills'
// This is code-splitting tecnique to make it render when user visit this component
const LazySkills = React.lazy( () => import('../../Components/Body/Skills/Skills'));
const LazyProject = React.lazy( () => import('../../Components/Body/Project/Project'));
const LazyEducation = React.lazy( () => import('../../Components/Body/Education/Education'));
const LazyAwards = React.lazy( () => import('../../Components/Body/Awards/Awards'));

export class Layout extends Component {
    constructor(props){
        super()
        this.state = {
            showSideDraw : true,
        }
    }
    ToggleSideDraw = () => {
        // if user is on phone than toggle side draw else do nothing
        if(window.innerWidth <= 500){
            this.setState({ showSideDraw : !this.state.showSideDraw });        
        }
    }
    widthHandler = () => {
        if(window.innerWidth >= 500){
            // console.log("DESKTOP")
            this.setState((prevState)=>{
                return { showSideDraw : true }
            });
        }else{
            // console.log("PHONE")
            this.setState((prevState)=>{
                return { showSideDraw : false }
            });
        }
    }
    componentDidMount(){
        // for initial render to hide sideDraw for mobile user and display for desktop users
        this.widthHandler()

        // after component is mounted that event listner is running in callback loop and keeps on listening if user is on desktop or phone
        window.addEventListener("resize", this.widthHandler);
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                <Toolbar toggle = {this.ToggleSideDraw}/>

                <div className = 'BodyDisplay'>
                    <SideDraw show = {this.state.showSideDraw} close = {this.ToggleSideDraw}/>
                    <section className = "Content">
                        <Switch>
                            <Route path = '/' exact render = {() => <About /> }/>
                            <Route path = '/skill' render = {() => (
                                <Suspense fallback={<Spinner/>}>
                                    <LazySkills/>
                                </Suspense>
                            )} />

                            <Route path = '/project' render = {() => (
                                <Suspense fallback={<Spinner/>}>
                                    <LazyProject/>
                                </Suspense>
                            )} />

                            <Route path = '/education' render = {() => (
                                <Suspense fallback={<Spinner/>}>
                                    <LazyEducation/>
                                </Suspense>
                            )} />
                            <Route path = '/awards' render = {() => (
                                <Suspense fallback={<Spinner/>}>
                                    <LazyAwards/>
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
