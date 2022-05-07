import logo from "./logo.svg";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Visit from "./Visit";
import { Button, Form } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
function App() {
  return (
    <div className="App" class=" text-center">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">AYAZ WALI</Nav.Link>
              <Nav.Link eventKey={2} href="#memes"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      ;<h2>Hello React JS</h2>
      <h3>This is our First Website in React JS</h3>
      <Contact />
      <Visit />
    </div>
  );
}

export default App;
