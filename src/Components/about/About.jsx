import React, { Component } from 'react';
import "./about.css"
import illustration from "./illustration.png";
import { Container, Row, Col } from 'react-bootstrap'


class About extends Component {
    render () {
        return (
            <Container class="aboutParentContainer">
                <Row>
                    <Col xs={12} lg={6} className="img">
                        <img class="illustration" src={illustration}></img>
                    </Col>
                    <Col xs={12} lg={6} className="text">
                        <h1>Since 1928...</h1>
                        <p>The Village Bar has been a Madison favorite for legendary burgers and friendly company. 
                        <br></br>
                        <br></br>Built in 1915, the building was originally a single-family home just north of University Avenue. The home officially became a local watering hole in 1928 when it was established as Herling’s General Store and Bar. After moving the building to its current location on Mineral Point Road, it became known as Waterman’s Bar in 1944 when it was purchased by Robert Waterman. By 1953, the Village was given the name that it carries to this day by new owners Frank Vitale and Joe Namio. Vitale ran the Village, which had become a hot-spot for Glenway’s golfers, until 1978 when it was purchased by Madison natives Jan and Leo Castle. In 2000, Village Bar ownership changed hands again when Mark Kampa, who had worked as a bartender under Jan and Leo since 1988, took over. Intimately familiar with the care that had gone into the business, Mark and his wife Karen, maintained the friendly service and neighborhood atmosphere that the Village for 20 years. 
                        <br></br>
                        <br></br>In 2021, Village Bar found its current owners: Matt Fink, Tom Oberwetter, and Shawn Quinn. Long-time friends and devoted Village regulars, Matt, Tom, and Shawn are committed to maintaining the Village’s legacy of great food, great drinks, and a no-frills, hospitable atmosphere.
                        </p>
                    </Col>
                </Row>
            </Container>      
        )
    }
  }
  
  export default About