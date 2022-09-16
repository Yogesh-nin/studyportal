import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import './index.css'
const About = () => {
  return (
    <Container fluid className="about-section">
        <Row>
            <Col md={7} className="about-col">
                <p>Join our mission to make study choice transparent, globally.</p>
                <br />

                <p>Every year, we change the lives of millions of students. We enable them to explore all their study options in one place and to find the best fit study programme that matches their needs, goals, and preferences. In order to succeed in this mission, we work with over 3,750+ universities, business schools, law schools, and pathway providers who are eager to diversify their campuses and attract the right students from all over the world.</p>
                <br />
                <p>Education choice continues to reach a broad, global scale; and more students are keen to study abroad than ever before. Bring your institution to where 52 million prospective students are searching for their next study abroad opportunity. Ensure your institution's spotlight in the place where students will discover the amazing programmes you offer!</p>
                <br />

                <Button className="btn-about">Promote courses to students worldwide</Button>
            </Col>
            <Col md={5}>
                {/* <iframe src="https://www.youtube.com/watch?v=D2kpopymA1A&ab_channel=StudyportalsHQ"  width="420" height="345"></iframe> */}
            </Col>
        </Row>
    </Container>
  )
}

export default About