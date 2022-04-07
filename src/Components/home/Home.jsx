import React, { Component } from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap'
import "./home.css"
import background from "./vbMain.jpg";
import bestof from "./BOMadison.png";
import fb from "./fb.png";
import owners from "./owners.png";
import ode from "./ode.png";

class Home extends Component {
    render () {
        return (
          <div>
            <div >
              <img id="homeImg" src={background} />
            </div> 
            <Row>
              <Col xs={6} md={6} lg={3}>
                <Card className="card text-center">
                  <Card.Img className="cardImage" variant="top" src={bestof}/>
                    <Card.Body>
                      <Card.Title>Vote for the Village!</Card.Title>
                        {/* <Card.Text>
                          the Village has been nominated for the Best Burger in Madison! Click here to vote. 
                        </Card.Text> */}
                      <div className="d-grid gap-2">
                        <Button className="btn" href="https://www.channel3000.com/best-of-madison-2022/#/gallery?group=407692" variant="dark">Vote Here</Button>
                      </div>
                    </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={6} lg={3}>
                <Card className="card text-center">
                  <Card.Img className="cardImage" variant="top" src={fb}/>
                    <Card.Body>
                      <Card.Title>Follow us on Facebook</Card.Title>
                        {/* <Card.Text>
                          Stay up-to-date on everything happening at the Village Bar
                        </Card.Text> */}
                        <div className="d-grid gap-2">
                          <Button className="btn" href="https://www.facebook.com/TheVillageBar/" variant="dark">Follow Us</Button>
                        </div>
                    </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={6} lg={3}>
                <Card className="card text-center">
                  <Card.Img className="cardImage" variant="top" src={owners}/>
                    <Card.Body>
                      <Card.Title>The VB is Back!</Card.Title>
                        {/* <Card.Text>
                          Read more about the Village's comeback here. Thanks, Channel 3000!
                        </Card.Text> */}
                      <div className="d-grid gap-2">
                        <Button className="btn" href="https://www.channel3000.com/village-bar-is-set-to-reopen-under-new-ownership/" variant="dark">Learn More</Button>
                      </div>
                    </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={6} lg={3}>
                <Card className="card text-center">
                  <Card.Img className="cardImage" variant="top" src={ode}/>
                    <Card.Body>
                      <Card.Title>An Ode to the Village Bar</Card.Title>
                        {/* <Card.Text>
                          Read more about the Village's comeback here. Thanks, Channel 3000!
                        </Card.Text> */}
                        <div className="d-grid gap-2">
                          <Button className="btn" href="https://www.channel3000.com/an-ode-to-the-village-bar/" variant="dark" >Read More</Button>
                        </div>
                    </Card.Body>
                </Card>
              </Col>
            </Row>
          </div> 
        )
    }
}
  
  export default Home