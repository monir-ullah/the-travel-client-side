// THis is import section 
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// THIs is service page
const Destination = (props) => {
     // This is use for distructuring
     const {name, img, description,_id, price} = props.item;
    return (
        <div>
            {/* This is slow single Offering */}
            <Col>
                <Card>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    {/* This is Name */}
                    <Card.Title>{name}</Card.Title>
                    <h6>Price: ${price}</h6>
                    <Card.Text>
                     {description}
                    </Card.Text>
                    <Link to={`/offering/${_id}`}>
                      {/* This is use for dynamic button */}
                    <Button variant="danger" className="text-white">Book Now</Button>
                    </Link>
                  </Card.Body>
                </Card></Col>
        </div>
    );
};

export default Destination;