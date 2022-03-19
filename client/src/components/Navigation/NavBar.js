import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBar = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Anbarasan Anandan
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="Skills">
                            Skills
                        </Nav.Link>
                        <Nav.Link as={Link} to="Experiences">
                            Experiences
                        </Nav.Link>
                        <Nav.Link as={Link} to="Projects">
                            Projects
                        </Nav.Link>
                        <Nav.Link as={Link} to="Educations">
                            Educations
                        </Nav.Link>
                        <Nav.Link as={Link} to="Passion">
                            Passion
                        </Nav.Link>
                        <Nav.Link as={Link} to="Contact">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
