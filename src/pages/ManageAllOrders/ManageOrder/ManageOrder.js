// THis is import section 
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const ManageOrder = (props) => {
    const {productName, img,} = props.item;
    return (
        <div className="py-5 ">
            <Container className="">
                
            <div > 
                
                    <Row className="d-flex justify-content-center align-items-center">
                    <Col><h6>{productName}</h6></Col>
                    <Col><img src={img} alt="" className="rounded" width="80%"/></Col>
                    <Col><button className="btn btn-success">Approved</button></Col>
                </Row>
                
            </div>
            </Container>
        </div>
    );
};

export default ManageOrder;