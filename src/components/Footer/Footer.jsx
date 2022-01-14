import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="bg-light">
        <Row className="p-4 text-center">
          <Col>
            <h6>Contact</h6>
            <p>Please contact Us</p>
            <p>To discuss about your project</p>
          </Col>
          <Col>
            <h6>Resources</h6>
            <p>Technologies Used in this Project</p>
            <p>Future projects</p>
          </Col>
        </Row>
        <Row>
          <p className="text-center">
            Fashion Like | All Rights Reserved | 2022
          </p>
          <p className="text-center"> Developed By DEV</p>
        </Row>
      </div>
    </>
  );
};

export default Footer;
