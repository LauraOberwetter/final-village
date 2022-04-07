import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Row, } from 'react-bootstrap';

class Footer extends Component {
    render () {
        return (
            <Navbar expand="lg" bg="white" sticky="top">
                <Container className="footContent">
                    <Row>
                        <p className="footer">Copyright ©2022 All Right Reserved</p>
                    </Row>
                </Container>
            </Navbar>
          )
        }
    }
  
  export default Footer