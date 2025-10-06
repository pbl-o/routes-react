import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import conversor from "../utils/conversor.js";
import { Link } from "react-router-dom";
import { useState } from "react";


const MyNavbar = () => {
  const total = 25000;
  const [token, setToken] = useState(false)
  return (
    <Navbar
      expand="lg"
      className="bg-dark w-100 d-flex justify-content-between"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Pizzería Ticcino</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <div className="d-flex flex-column flex-lg-row">
              <Nav.Link as={Link} to="/">🍕Home</Nav.Link>
              <Nav.Link as={Link} to={token ? '/' :"/login"}>{token ? "🔐Logout" : "🔐Login"}</Nav.Link>
              <Nav.Link as={Link} to={token ? '/profile' : '/register'}>
                {token ? "🔐Profile" : "🔐Register"}
              </Nav.Link>
            </div>

            <div className="ms-auto">
              <Nav.Link as={Link} to="/cart"> 🛒 Total: {conversor(total)}</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
