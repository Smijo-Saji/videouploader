import React from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

import Add from "../components/Add";
import Categories from "../components/Categories";
import Videos from "../components/Videos";

function Home() {
  const [addUpdate, setAddUpdate] = useState(false);

  return (
    <div>
      <Container>
        <Row>
          <Col lg={6} md={8}>
            <div className="homeimg">
              <img
                // https://i.postimg.cc/zD26zQS3/Whats-App-Image-2024-04-24-at-12-54-13-PM.png
                src="https://i.postimg.cc/fR5McYPp/ezgif-com-crop-2.gif"
                alt=""
              />
            </div>
          </Col>
          <Col
            lg={6}
            md={4}
            className="d-flex justify-content-center align-items-center sec2"
          >
            <Add update={setAddUpdate}></Add>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="mt-4">
          <Col lg={8}>
            <Videos updatedData={addUpdate} />
          </Col>
          <Col lg={4}>
            <Categories />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
