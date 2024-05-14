import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Landing.css";
import Features from "../components/Features";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landingbg">
      <Container>
        <Row>
          <Col lg={6} md={6}>
            <div className="heroimg">
              <img
                src="https://i.postimg.cc/fyV8rf2y/ezgif-com-crop-1.gif"
                alt=""
                className="w-100"
              />
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="herotxt">
              <div className="text-center">
                <h1>Upload</h1>
                <h1 style={{ color: "#1e56a0" }}>Videos</h1>
                <h1>Free</h1>
                <Link to={"/home"}>
                  <button className="herobtn btn border mt-2">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <Features />
        </div>
      </Container>
    </div>
  );
}

export default Landing;
