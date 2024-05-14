import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Navbar.Brand href="#home">
              <span className="logotxt">ArcaneClip</span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 shadow-none"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-items gap-4">
              <Nav.Link>
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "rgb(87, 87, 87)" }}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>
                <Link
                  to={"/home/history"}
                  style={{ textDecoration: "none", color: "rgb(87, 87, 87)" }}
                >
                  History
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  to={"/home"}
                  style={{ textDecoration: "none", color: "rgb(87, 87, 87)" }}
                >
                  Upload
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
