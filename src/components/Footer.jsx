import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <div className='footercontainer mt-5'>
            <Container >
                <Row className='footerdetails'>
                    <Col>
                        <h6>USEFUL LINKS</h6>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <a href="">Privacy Policy</a>
                            <a href="">Order Online</a>
                            <a href="">About Us</a>
                            <a href="">Gallery</a>
                        </div>
                    </Col>
                    <Col className='pt-3' style={{ display: "flex", flexDirection: "column" }}>
                        <a href="">Home</a>
                        <a href="">We Serve</a>
                        <a href="">Why Us</a>
                        <a href="">Videos</a>
                    </Col>
                    <Col>
                        <h6>CONTACT</h6>
                        <p>+91-8888888888</p>
                        <p>websupport@justdial.com</p>
                    </Col>
                    <Col>
                        <h6>CONNECT</h6>
                        <div className='footlinks ' >
                            <a href=""><i className="fa-brands fa-facebook pe-2"></i></a>
                            <a href=""><i class="fa-brands fa-linkedin px-2"></i></a>
                            <a href=""><i className="fa-brands fa-instagram px-2"></i></a>
                            <a href=""><i className="fa-brands fa-twitter px-2"></i></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer