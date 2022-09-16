import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import img from '../../Assets/masonry-5.png'
import './index.css'
const HeroSection2 = () => {
  return (
    <Container fluid className="hero-2">
        <Row>
            <Col md={7} className="hero-2-col">
                <h3>Beyond the Platform</h3>
                <p>As our first core value states, 'Make our world a little better', we care about giving something back to the community, and being able to help those who need it most is what really makes us happy. Currently, Studyportals supports Knowledge for Children, as well as other education-related charities and projects.</p>

                <Button id="orange-btn">Learn more about our social commitment</Button>
            </Col>
            <Col md={5} className="hero-2-col hero-2-image">
                <img className="img img-fluid" src={img} alt="" />
            </Col>
        </Row>
    </Container>
  )
}

export default HeroSection2