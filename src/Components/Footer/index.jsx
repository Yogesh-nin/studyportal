import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DropdownComponent from "../Dropdown";
import "./index.css";
const Footer = () => {
  return (
    <>
      <Container fluid className="footer-section">
        <Row>
          <Col md={6} lg={4} className="footer-col">
            <h3>SITEMAP</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  <DropdownComponent
                    title="About"
                    items={[
                      "About Us",
                      " Our Story",
                      " Team",
                      "Partners",
                      "Advisory Board",
                    ]}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <DropdownComponent
                    title="For Students"
                    items={[
                      "Study Options",
                      "StudyPortals Scholarship",
                      " What Our students Say",
                    ]}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <DropdownComponent
                    title="For Institutions"
                    items={[
                      "Student Recruitment & Marketing",
                      " Analytics and Consulting",
                      " Case Studies",
                      " Student Recruitmeent Guides",
                    ]}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <DropdownComponent
                    title="Career"
                    items={["Career", "Our Mission and Core values"]}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <DropdownComponent
                    title="News & Insights"
                    items={["Intelligence Projects", "News", "Blog articles"]}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <DropdownComponent
                    title="Initiatives"
                    items={[
                      "Global Access Initiative",
                      "#StandWithUkraine initiative",
                      "Global Student Satisfaction Awards",
                    ]}
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <DropdownComponent
                    title="Events"
                    items={["Studyportals Academy"]}
                  />
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={4} className="footer-col">
            <h3>Our Portals</h3>
            <ul className="list-unstyled portal">
              <li>
                <a href="">
                  <span>Bachelors</span>portals.com
                </a>
              </li>
              <li>
                <a href="">
                  <span>Masters</span>portals.com
                </a>
              </li>
              <li>
                <a href="">
                  <span>PhD</span>portals.com
                </a>
              </li>
              <li>
                <a href="">
                  <span>Shortcourses</span>portals.com
                </a>
              </li>
              <li>
                <a href="">
                  <span>Distancelearning</span>portals.com
                </a>
              </li>
              <li>
                <a href="">
                  <span>Scholarship</span>portals.com
                </a>
              </li>
              <li>
                <a href="">
                  <span>Admissiontest</span>portals.com
                </a>
              </li>
              <li>
                <a href="">
                  <span>Englishtest</span>portals.com
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={4} className="footer-col">
            <h3>Services</h3>
            <ul className="list-unstyled">
              <li>
                <a href="">University Administration</a>
              </li>
              <li>
                <a href="">Register your University</a>
              </li>
              <li>
                <a href="">Follow us on:</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container fluid className="copyright">
        <Row className="justify-content-between align-items-center">
          <Col xs={12} md={4}>
            <span>@ 2007-2022 Studyportals B.V.</span>
          </Col>
          <Col xs={12}  md={6}>
            <ul className="list-unstyled d-flex justify-content-between">
              <li>
                <a href="">Disclaimer</a>
              </li>
              <li>
                <a href="">Terms of use</a>
              </li>
              <li>
                <a href="">Privacy and cookie statement</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
