import React from 'react'
import Card from 'react-bootstrap/Card';


const Serve = ({ listIs }) => {

    return (
        <>
            <h1 className='syne-tactile-regular text-center pt-4'>We Serve</h1>
            <div className='productList'>
                {listIs.map((donuts) => (
                    <Card style={{ display: "flex", justifyContent: "space-evenly", margin: "20px" ,border:"none"}} className='pb-4'>
                        <Card.Img height={220} variant="top" src={donuts.images} />
                        <Card.Body>
                            <Card.Title className='text-center'>{donuts.title}</Card.Title>
                        </Card.Body>
                    </Card>
                ))
                }

            </div >
        </>
    )
}

export default Serve