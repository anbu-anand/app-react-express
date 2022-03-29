import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  const navLinks = [
    {
      key: 1,
      path: "Skills",
      label: "Skills",
    },
    {
      key: 2,
      path: "Experiences",
      label: "Experiences",
    },
    {
      key: 3,
      path: "Projects",
      label: "Projects",
    },
    {
      key: 4,
      path: "Educations",
      label: "Educations",
    },
    {
      key: 5,
      path: "Passion",
      label: "Passion",
    },
    {
      key: 6,
      path: "Contact",
      label: "Contact",
    },
  ];

  const renderNavLink = navLinks.map(({ key, path, label }) => {
    return (
      <Nav.Link key={key} as={Link} to={path} eventKey={key}>
        {label}
      </Nav.Link>
    );
  });

  return (
    <Navbar collapseOnSelect expand="false" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Anbarasan Anandan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">{renderNavLink}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
