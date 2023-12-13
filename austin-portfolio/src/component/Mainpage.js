import React from "react";


import { Container,  Row , Col , Button,Image} from "react-bootstrap";

function Mainpage() {
    return (
        <>
            <Container fluid>
                <h1>Hi all I'm Austin Raja 👋</h1>
                <p>A passionate Frontend Developer🚀having an experience of building Web applications with HTML/CSS/JavaScript/Reactjs and somer other cool libraries and frameworks</p>
                <Row>
                <Col xs lg="1"><a><i class="fa-brands fa-square-github fa-2xl"></i></a>
               <a> <i class="fa-brands fa-linkedin fa-2xl " ></i></a>
                <a><i class="fa-brands fa-google fa-2xl"></i></a>
                </Col>
                </Row>

                <Button className="m-5">CONTACT ME </Button>
                <Button className="m-5">SEE MY RESUME </Button>
                <Image alt="person" />
            </Container>
        </>
    )
}

export default Mainpage;