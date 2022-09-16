import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './index.css'
const CoverAbout = () => {
  return (
    <>
        <Container fluid className="about-cover-container">
            <Row>
                <h1>Studyportal is the global study choice platform. <br/> Empowering the world to choose education.</h1>
            </Row>
        </Container>
        <Container fluid className="cover-text">
            <p><strong>Studyportals</strong> began as a spin-off from a couple of large international study associations. It was born out of frustration, a total lack of information and overview of the fast-growing number of international Master’s programmes in Europe. In 2007, <span className="text-link">Mastersportal.com</span> was developed and proved to be a roaring success. Soon after, <span className="text-link">Bachelorsportal.com</span>, <span className="text-link">PhDportal.com</span>, <span className="text-link">Shortcoursesportal.com</span>, and <span className="text-link">Distancelearningportal.com</span> followed.</p>
            <br/>

            <p>In 2021, we helped 52 million students around the world to explore study programmes and make an informed choice, throughout over 200,000 courses at 3,750+ educational institutes across 110 countries.</p>

            <p className="text-link read-more">Read more about our story</p>
            
        </Container>
    </>
  )
}

export default CoverAbout