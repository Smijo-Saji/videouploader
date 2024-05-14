import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <div className=" footerdiv mt-5 py-5 text-center">
      <Container>
        <Row className="">
          <Col lg={3} md={3} sm={6}>
            <div className=" sec-1 mt-4">
              <h5>ArcaneClip</h5>
              <p>
                Designed and build with all the love in the world by the
                bootstrap team possimus recusande consequator ipsa veritatis
                expedia aspernatue.
              </p>
            </div>
          </Col>
          <Col lg={3} md={3} sm={6}>
            <div className="sec-2 mt-4">
              <h5>Links</h5>
              <p>Landing Page</p>
              <p>Home</p>
              <p>Watch History</p>
            </div>
          </Col>
          <Col lg={3} md={3} sm={6}>
            <div className="sec-3 mt-4">
              <h5>Guides</h5>
              <p>react</p>
              <p>react bootsrap</p>
              <p>routing</p>
            </div>
          </Col>
          <Col lg={3} md={3} sm={6}>
            <div className="sec-4 mt-4">
              <h5>Contact Us</h5>
              <input
                type="text"
                className="mb-2 form-control"
                placeholder="Email-id"
              />
              <button className="mb-3 btn btn-success">Send</button>
              <div className="d-flex justify-content-center text-white gap-4 ms-2 ">
                <i class="fa-brands fa-instagram "></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-github"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
