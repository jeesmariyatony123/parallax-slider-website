import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <div >

            <Container>
                <Row>
                    <Col></Col>
                    <Col className='pt-5 mt-4 text-center ' >
                        <h1 className='text-light' style={{ marginTop: '20vh', fontSize: '3em' }}>Giving your Hunger</h1>
                        <h1 className='text-light syne-tactile-regular'>A Donut Option</h1>
                        <div >
                            <Button className='me-4 ' style={{ background: '#fb71c6' }}>Menu</Button>
                            <Button style={{ background: '#fb71c6' }}>Order Online</Button>
                        </div>
                    </Col>

                </Row>

            </Container>
        </div>
    )
}

export default Header