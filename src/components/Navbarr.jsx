import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from "../images/logo.png"

const Navbarr = () => {
    return (
        <>
            <Navbar expand="lg" className=" backnav">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="toalign me-auto mx-auto">
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#link">ORDER ONLINE</Nav.Link>
                            <Nav.Link href="#link">WE SERVE</Nav.Link>
                            <Nav.Link href="#link">ABOUT US</Nav.Link>
                            <Navbar.Brand className='px-5' href="#home"><img width={100} height={70} src={image}  /></Navbar.Brand>
                            <Nav.Link href="#link">WHY US</Nav.Link>
                            <Nav.Link href="#link">GALLERY</Nav.Link>
                            <Nav.Link href="#link">VIDEOS</Nav.Link>

                            <NavDropdown title="MORE" id="basic-nav-dropdown">
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
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbarr