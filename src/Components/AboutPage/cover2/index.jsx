import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./index.css";
const Cover2 = () => {
  return (
    <Container fluid className="cover2">
      <Row className="cover2-text">
          <h2>Who we are and why we do what we do</h2>
          <p>
            From its very conception, Studyportals was founded to solve (our
            own) student problems. It was, and still is, fuelled by a strong
            belief in the value of international experiences - both for the
            individual student and for the society.
          </p>

          <div className="d-flex justify-content-center">
          <Button id="cover2-btn">Our mission and core values</Button>
        </div>
      </Row>
    </Container>
  );
};

export default Cover2;
