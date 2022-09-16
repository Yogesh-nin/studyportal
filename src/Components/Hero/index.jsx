import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './index.css'
const Hero = () => {
  return (
    <div className="hero-section">
        <Container fluid className="hero-container">
            <h2 className="text-center">Education choice transparent, globally</h2>
            <Row className="justify-content-center">
                <Col sm={6} md={4} lg={3} className="justify-content-center hero-btn-div">
                    <h4>Start Course Search</h4>
                    <div className="d-flex justify-content-center">
                        <Button id="hero-btn1" className="hero-btn">I'm a Student</Button>
                    </div>
                </Col>
                <Col sm={6} md={4} lg={3}  className=" hero-btn-div justify-content-center">
                    <h4>Promote your courses</h4>
                    <div className="d-flex justify-content-center">
                        <Button id="hero-btn2" className="hero-btn">I work in higher ed</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Hero