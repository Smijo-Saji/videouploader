import React from "react";
import "./Features.css";

import Card from "react-bootstrap/Card";

function Features() {
  return (
    <div className="features text-center ">
      <h1 className="my-4">Features</h1>
      <div className="d-flex justify-content-evenly flex-wrap gap-3">
        <Card style={{ width: "18rem" }} className="shadow card-div">
          <Card.Img
            variant="top"
            src="https://i.postimg.cc/mDhkxcb3/3b50e77c51cbde773abe15045c77692c-removebg-preview-1.png"
            className="card-img"
          />
          <Card.Body className="text-area">
            <Card.Title>Managing Vedios</Card.Title>
            <Card.Text>
              Manage your videos effortlessly with our app. Organize, edit, and
              preview your content for seamless video management.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="shadow card-div">
          <Card.Img
            variant="top"
            src="https://i.postimg.cc/13jzZGzW/Whats-App-Image-2024-04-23-at-9-53-27-PM-1-removebg-preview.png"
            className="card-img"
          />
          <Card.Body className="text-area">
            <Card.Title>Categorize Videos</Card.Title>
            <Card.Text>
              Effortlessly categorize your videos into custom folders for easy
              organization and quick access.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="shadow card-div">
          <Card.Img
            variant="top"
            src="https://i.postimg.cc/RVwr0Mhc/Whats-App-Image-2024-04-23-at-9-53-27-PM-removebg-preview.png"
            className="card-img"
          />
          <Card.Body className="text-area">
            <Card.Title>Watch History</Card.Title>
            <Card.Text>
              Keep track of your viewed videos with our watch history feature.
              Easily revisit videos you've watched and continue where you left
              off.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Features;
