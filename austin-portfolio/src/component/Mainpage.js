import React from "react";


import { Container,  Row , Col , Button,Image} from "react-bootstrap";

function Mainpage() {
    return (
        <>
            <Container fluid>
            <Row>
            <Col xs lg="6">
                <h2>Hi all I'm Austin Raja 👋</h2>
                <p>A passionate Frontend Developer🚀having an experience of building Web applications with HTML/CSS/JavaScript/Reactjs and somer other cool libraries and frameworks</p>  
                <a><i class="fa-brands fa-square-github fa-2xl"></i></a>
                 <a><i class="fa-brands fa-linkedin fa-2xl " ></i></a>
                <a><i class="fa-brands fa-google fa-2xl"></i></a>
                
                
                <Button className="m-5">CONTACT ME </Button>
                <Button className="m-5">SEE MY RESUME </Button>
                </Col>
                <Col xs lg="6">
                <Image src="../image/WhatIDo.avif" width={"570"} height={"500"} alt="person" />
                </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs lg="6">
                    <Image src="" alt="image" />
                    </Col>
                    <Col xs lg="6">
                        <h2>What i do</h2>
                        <p>CRAZY FRONTEND DEVELOPER WHO WANT TO EXPLORE EVERY </p>
                    </Col>


                </Row>
                

            </Container>
        </>
    )
}

export default Mainpage;