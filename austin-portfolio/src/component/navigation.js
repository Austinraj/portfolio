import React from "react";

import { Container, Nav, Navbar, Image} from 'react-bootstrap';


function navigation(){

    return(
        <>
        <Navbar bg="light" data-bs-theme="light">
        <Container fluid>
          <Navbar.Brand href="#home"><Image src="../image/logo.svg" height={"65px"}
           size="lg" /></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#skills"  className="me-5">Skills</Nav.Link>
            <Nav.Link href="#opensource" className="me-5">Open Source</Nav.Link>
            <Nav.Link href="#projects" className="me-5">Projects</Nav.Link>
            <Nav.Link href="#achievements" className="me-5">Achievements</Nav.Link>
            <Nav.Link href="#blogs" className="me-5">Blogs</Nav.Link>
            <Nav.Link href="#contact" className="me-5">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    )
}

export default navigation;