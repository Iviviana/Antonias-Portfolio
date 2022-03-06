import React from "react";
import {Col, Row, Card, Container} from "react-bootstrap";
import image from '../assests/avatar.png';
import Avatar from '@mui/material/Avatar';


function About() {
    return (
        <Container>
           <Row>
                <Col md={5}>
                    <Card bg="dark" text="white" body>
                        <Row >
                            {/* <Col md={4}>
                            <Image className="img-fluid " roundedCircle fluid thumbnail src={image} />
                            </Col> */}
                            {/* <Avatar alt="Remy Sharp" src={image} /> */}
                            <Avatar
                                alt="Antonia Garcia"
                                src={image}
                                sx={{ width: 200, height: 200 }}
                                />
                            <Card.Text>
                                Welcome to my portfolio!<br/> <br/>
                                Before I studied coding, I'd graduated from Florida International Univeristy with a Bachelor's of Science in Biological Sciences with Honors (Magna Cum Laude).<br />
                                After graduation, I began working in the University of Miami (UM) Health System during the height of the pandemic. Which is how I found out about the coding bootcamp. <br />
                                I currently still work in the UM health system as a Patient Experience Representative and I have now recently graduated from the Full-Stack Bootcamp. <br />
                                Please use the contact link to send me a message. I look forward to hearing from you!
                            </Card.Text>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default About;

