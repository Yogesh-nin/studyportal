import React from "react";
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import AccordionTabs from "../Accordion";
import img from "../../../Assets/isa-modified.png";
import "./index.css";
import map from "../../../Assets/map.png";
const Navs = () => {
  return (
    <Container fluid className="contact-page-section">
      <Row>
        <Col md={8}>
          <Row className="left-section">
            <Col xs={12}>
              <img src={map} alt="" className="img img-fluid" />
            </Col>
            <Col xs={12} className="location">
              <Row className="d-flex justify-content-center">
                <Col md={6} lg={4} className="d-flex justify-content-center">
                  <div className="country-sphere">
                    <h5>NETHERLANDS</h5>
                    <span>Headquarters</span> <span>Klokgebouw 280</span> <span>5617 AC Eindhoven</span>
                    <a href="">+31 40 292 0060</a>
                  </div>
                </Col>
                <Col md={6} lg={4} className="d-flex justify-content-center">
                  <div className="country-sphere">
                  <h5>UNITED STATES</h5>
                    <span>US Sales Office</span> <span>Woodbury Ave, PMB # 302</span> <span>Portsmouth, NH 03801-3210</span>
                    <a href="">+1 (857) 302-2395</a>
                  </div>
                </Col>
                <Col md={6} lg={4} className="d-flex justify-content-center">
                  <div className="country-sphere">
                  <h5>AUSTRALIA</h5>
                    <span>Asia-Pacific Sales Office</span> <span>Level 23, 40 City Road</span> <span>Melbourne VIC 3006</span>
                    <a href="">+61396747106</a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="student" title="I'm a student">
              <p>
                Dear Student, before sending us a message, please have a look at
                our frequently asked questions. Maybe these answer your question
                right away!
              </p>

              <AccordionTabs />
            </Tab>
            <Tab eventKey="profile" title="I work at an Institution">
              <div className="contact-details">
                <div>
                  <img src={img} alt="" className="img -mg-fluid" />
                </div>
                <h4>How can we help you? </h4>
                <span className="contact-name">
                  Isabela Santa Roza dos Santos,
                </span>
                <span className="contact-designation">Marketing Manager</span>
                <span style={{ margin: "20px 0px" }}>
                  APAC: +61 3 9674 7106
                </span>
                <span style={{ margin: "20px 0px" }}>
                  EMEA & UKI: +31 (40) 218 0279
                </span>
                <span style={{ margin: "20px 0px" }}>
                  North America: +1 (857) 302 2395
                </span>

                <Button id="contact-us-btn">Contact Us</Button>
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Navs;
