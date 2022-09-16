import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ESC from "../../Assets/ESC.jpg";
import cambridge from "../../Assets/cambridge.jpg";
import studywest from "../../Assets/studywest.png";
import "./index.css";
import SliderComponent from "../Slider";

const ClientsTalk = () => {
  return (
    <Container fluid className="client-section">
      <h2>What our Client Say</h2>
      <Row className="mb-4">
        <Col className="client-col">
          <div>
            <img src={ESC} alt="" />
          </div>
          <div className="text">
            <p>
              Studyportals is our most valued partner platform. The platform is
              actively engaged in facilitating and innovating the decison-making
              process that international students undergo before studying
              abroad. Since our collaboration, we have witnessed excellent
              results in terms of international student recruitment.
            </p>
            <br/>
            <span><strong>Mohamed Elzayedi,</strong></span> <br />
            <span>Recruitment manager</span>
          </div>
        </Col>
        <Col className="client-col">
          <div>
            <img src={cambridge} alt="" />
          </div>
          <div className="text">
            <p>
              I've known Studyportals since the very beginning and I trust their
              services and personalized advice. They care about having a strong
              and long-term relationship with their clients based on
              transparency and reaching common goals.
            </p>
            <br/>
            <span><strong>Silvana K. Tafur Yasuda-Bakker,</strong></span> <br />
            <span>Director of Marketing, Demand Generation</span>
          </div>
        </Col>
        <Col className="client-col">
          <div>
            <img src={studywest} alt="" />
          </div>
          <div className="text">
            <p>
              Study West Virginia and Studyportals teamed up to increase the
              number of international students in West Virginia by promoting the
              state and its schools as a study destination. As a consortia, we
              received a lot more traffic through Studyportals than we would
              have gotten on our own and I was impressed by how many referrals
              converted into inquiries for our universities. Additionally,
              Studyportals has been a great resource for knowledge in the field
              and has been very helpful in reviewing our analytics. I look
              forward to a continued partnership with Studyportals and would
              recommend them to other state consortia.
            </p>
            <br/>
            <span><strong>Dr. Clark Egnor,</strong></span> <br />
            <span>Director</span>

            
          </div>
        </Col>
      </Row>
      <div className="mt-5">
        <SliderComponent  />
      </div>
    </Container>
  );
};

export default ClientsTalk;
