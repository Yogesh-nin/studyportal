import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import founder1 from '../../../Assets/about/edwin.png'
import founder2 from '../../../Assets/about/thijs.png'
import founder3 from '../../../Assets/about/magnus.png'
import './index.css'
const Founder = () => {
  return (
    <Container fluid className="founder-container">
        <h2>Meet the Founders</h2>
        <Row>
            <Col className='d-flex justify-content-center'>
                <div className='d-flex flex-column'>
                <div className="image">
                    <img src={founder1} alt="" />
                </div>
                <span className="text-center title">Edwin van Rest</span>
                <span className='text-center deignation'>CEO</span>
                </div>
            </Col>
            <Col className='d-flex justify-content-center'>
                <div className='d-flex flex-column align-items-center'>
                    <div className="image">
                        <img src={founder2} alt="" />
                    </div>
                    <span className="text-center title">Thijs Putman</span>
                    <span className='text-center deignation'>Chief Architect</span>

                    <Button id="team-btn">Meet the rest of our team</Button>

                </div>
            </Col>
            <Col className='d-flex justify-content-center'>
                <div className='d-flex flex-column'>
                <div className="image">
                    <img src={founder3} alt="" />
                </div>
                <span className="text-center title">Magnus Olsson</span>
                <span className='text-center designation'>Director</span>
                </div>
            </Col>
        </Row>
       
    </Container>
  )
}

export default Founder