import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import why1 from '../images/why1.png'
import why2 from '../images/why2.png'
import why3 from '../images/why3.png'
import why4 from '../images/why4.png'

const WhyUs = () => {
    return (

        <Container className='text-white' style={{paddingTop:'3em'}}>
            <h1 className='syne-tactile-regular text-center pt-4'>Why Us</h1>

            <Row style={{paddingTop:'7em'}}>
                <Col >
                    <div className='d-flex ' style={{paddingLeft:'17em'}} >
                        <img className='whyimg' src={why1} alt="" />
                        <h5 className=' pt-4'>Tastiest Donuts</h5>
                    </div>
                    <div className='d-flex ' style={{paddingLeft:'17em',paddingTop:'3em'}}>
                        <img className='whyimg' src={why2} alt="" />
                        <h5 className=' pt-4'>Best Offers</h5>
                    </div>
                </Col>
                <Col>
                    <div className='d-flex'>
                        <img className='whyimg' src={why3} alt="" />
                        <h5 className=' pt-4'>Customised Donuts</h5>
                    </div>
                    <div className='d-flex' style={{paddingTop:'3em'}}>
                        <img className='whyimg' src={why4} alt="" />
                        <h5 className=' pt-4'>Hygiene First</h5>
                    </div>
                </Col>

            </Row>

        </Container>
    )
}

export default WhyUs