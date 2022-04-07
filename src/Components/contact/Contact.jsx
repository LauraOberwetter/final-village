import React, { Component } from 'react';
import "./contact.css"
import outside from "./oldOutside.png";
import map from "./map.png"; 
import { Container, Row, Col } from 'react-bootstrap'
// import MapComponent from '../map/MapComponent';


class Contact extends Component {
    render () {
        return (
            <Container>
                <Row>
                    {/* <Col xs={12} lg={6}>
                      <MapComponent />
                    </Col> */}
                    <Col xs={12} lg={6} className="text">
                        <div class="flex-child-element text" id="contactText">
                            <h1 class="h1Contact">Say Hi!</h1>
                            <h3 class="contactBody">At the corner of Glenway and Mineral Point</h3>
                            <br></br>
                            <h3 class="contactBody">3801 Mineral Point Rd.</h3>
                            <h3 class="contactBody">Madison, WI 53705</h3>
                            <h3 class="contactBody">(608)233-9956</h3>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className="img">
                        <div class="flex-child-element img">
                            <img class="map" src={map}></img> 

                        </div>
                    </Col>
                </Row>
            </Container>     
        )
    }
  }
  
  export default Contact