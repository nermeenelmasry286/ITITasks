import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Header = () => {
    return (
    
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href="#home">MyStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    
                    <NavDropdown title="Shop" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="#link">About</Nav.Link>

                    <Nav.Link href="#link">Blog</Nav.Link>

                    <Nav.Link href="#link">Contact</Nav.Link>
                    <Nav.Link href="#link"><i className="bi bi-cart-fill"></i>[0]</Nav.Link>
                  
                  </Nav>
             


                </Navbar.Collapse>
              </Container>
            </Navbar>
        
    );
};
