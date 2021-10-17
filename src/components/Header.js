import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import React, {Component} from "react";
import {NavDropdown, Nav} from "react-bootstrap";


class Header extends Component {
    render() {
        return (
            <div className="" >
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Eleos</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">About Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="#login">Login</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;
