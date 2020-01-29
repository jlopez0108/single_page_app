import React from "react"
import { Nav, NavItem, NavLink, Jumbotron } from 'reactstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import './styles/bootstrap.min.css'

import Home from './pages/Home.js'
import AboutUs from './pages/AboutUs.js'
import LearnMore from './pages/LearnMore.js'

class MainApp extends React.Component {
  render () {
    return (
        <Router>
            <Jumbotron><h1>Welcome to Jose and Sam's App</h1></Jumbotron>
            <Nav tabs>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About Us</NavLink>
              </NavItem>
              <NavItem>
                 <NavLink href="/more">Learn More</NavLink>
              </NavItem>
            </Nav>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={AboutUs} />
                <Route path='/more' component={LearnMore} />
            </Switch>
        </Router>
    );
  }
}

export default MainApp
