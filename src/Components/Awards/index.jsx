import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../../Assets/Awards/deloitte.jpg'
import img2 from '../../Assets/Awards/eaie.gif'
import img3 from '../../Assets/Awards/fdgazellen.png'
import img4 from '../../Assets/Awards/FGI.png'
import img5 from '../../Assets/Awards/Pieoneer.jpg'
import img6 from '../../Assets/Awards/sprout_logo.jpg'

import './index.css'
const Awards = () => {
  return (
    <Container fluid className="awards-section">
        <h2>Business and social excellence awards</h2>
        <Row>
            <Col md={4} lg={2} className="d-flex justify-content-center" >
                <div className="award-img">
                    <img src={img5} alt="" />
                    <p>Digital Innovation of the Year’, The PIEoneer Awards 2018</p>
                </div>
            </Col>
            <Col md={4} lg={2} className="d-flex justify-content-center">
                <div className="award-img">
                    <img src={img1} alt="" width="170px" height="85px" />
                    <p>7th fastest growing tech company in the Netherlands, #54 in EMEA</p>
                </div>
            </Col>
            <Col md={4} lg={2} className="d-flex justify-content-center">
                <div className="award-img">
                    <img src={img3} alt="" width="170px" height="85px" />
                    <p>#1 International Growth Company in the Netherlands</p>
                </div>
            </Col>
            <Col md={4} lg={2} className="d-flex justify-content-center">
                <div className="award-img">
                    <img src={img2} alt="" width="170px" height="85px" />
                    <p>EAIE Rising Star Award for notable contribution to higher education</p>
                </div>
            </Col>
            <Col md={4} lg={2} className="d-flex justify-content-center">
                <div className="award-img">
                    <img src={img6} alt="" width="170px" height="85px" />
                    <p>Top 50 startup challenging the status quo</p>
                </div>
            </Col>
            <Col md={4} lg={2} className="d-flex justify-content-center">
                <div className="award-img">
                    <img src={img4} alt="" width="170px" height="85px" />
                    <p>Fast Growth Icons Berlin for fast growing European companies</p>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Awards