import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Container} from 'react-bootstrap';
import { Nav as BootstrapNav } from 'react-bootstrap'
import logo from "./vbLogo.jpg"
import title from "./vbTitleLogo.png"
import { LinkContainer } from 'react-router-bootstrap'
import "./nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'

class Nav extends Component {
    render () {
        return (
            <Navbar expand="lg" bg="white" sticky="top" className="navbar">
                <Container className="navContent">
                            <Navbar.Brand href="/"><img className="logo" src={logo} /></Navbar.Brand>
                            {/* <Navbar.Brand href="/"><img className="title" src={title} /></Navbar.Brand> */}
                            <Navbar.Toggle aria-controls="basic-navbar-nav">
                                <FontAwesomeIcon icon={faBurger} size="xl" color="black"/>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                                <BootstrapNav>
                                    <LinkContainer to="/about">
                                        <BootstrapNav.Link className="link">About</BootstrapNav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/menu">
                                        <BootstrapNav.Link className="link">Menu</BootstrapNav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/contact">
                                        <BootstrapNav.Link className="link">Contact</BootstrapNav.Link>
                                    </LinkContainer>
                                </BootstrapNav>
                            </Navbar.Collapse>
                </Container>
            </Navbar>
          )
        }
    }
  
  export default Nav