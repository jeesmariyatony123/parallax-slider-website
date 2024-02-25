import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Videos = () => {
    return (

        <>
            <h1 className='syne-tactile-regular text-center pt-4'>Videos</h1>

            <Container>
                <Row className='ps-4 pt-5 pb-5'>
                    <Col><iframe style={{ borderRadius: "10px" }} width="610" height="391" src="https://www.youtube.com/embed/iag63JQkijo" title="TYPES OF DONUTS YOU CAN FIND AT DONUT SHOPS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
                    <Col><iframe style={{ borderRadius: "10px"}} width="610" height="391" src="https://www.youtube.com/embed/TeiNNZ8tfT8" title="How to Make Donuts Two Ways: Baked Doughnuts and Fried Doughnuts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
                </Row>
            </Container>
        </>

    )
}

export default Videos