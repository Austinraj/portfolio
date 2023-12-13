import React from "react";

import { Container, Nav, Navbar, Image} from 'react-bootstrap';


function navigation(){

    return(
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary " bg="light" data-bs-theme="light">
        <Container fluid>
          <Navbar.Brand href="#home"><Image src="../image/logo.svg" height={"65px"} roundedCircle  /></Navbar.Brand>
          <Navbar.Toggle className="ms-auto" aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="#skills"  className="me-5">Skills</Nav.Link>
            <Nav.Link href="#opensource" className="me-5">Open Source</Nav.Link>
            <Nav.Link href="#projects" className="me-5">Projects</Nav.Link>
            <Nav.Link href="#achievements" className="me-5">Achievements</Nav.Link>
            <Nav.Link href="#blogs" className="me-5">Blogs</Nav.Link>
            <Nav.Link href="#contact" className="me-5">Contact Me</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    )
}

export default navigation;