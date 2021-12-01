// THis is import section 
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = (props) => {
    const [manageOrder, setManageOrder] = useState([]);
    const {user} = useAuth();
    const {productName, img, email} = props.item;
    const userEmailLogin = user?.email;
    const logedInEmail = email;
    let productItemName;
    let status;
    let imageUrl;
    if(userEmailLogin===logedInEmail){

        productItemName = productName;
        imageUrl = img;
        status = "Pending"

    }

    
    return (
        <div className="py-5 ">
            <Container className="">
                
            <Row className="d-flex justify-content-center align-items-center">
                    <Col><h6>{productItemName}</h6></Col>
                    <Col><img src={imageUrl} alt="" className="rounded" width="80%"/></Col>
                    <Col><h6> {status}</h6></Col>
                    
                    </Row>
            </Container>
        </div>
    );
};

export default MyOrder;