// This is use for import
import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import Destination from './Destination/Destination';

const TourDestination = () => {
    // This is use for updating data
    const [destinations, setDestinations] = useState([]);
    useEffect( () => {
        // This useEffect Use for taking data from fake DB
        fetch('https://thawing-woodland-70803.herokuapp.com/offering')
        .then(res => res.json())
        .then(data => {
            setDestinations(data)
        })
    },[])
    return (
        <div>
            <div className="p-5 mt-5">
           <Container>
               {/* THIs section will send the data to the Destination Page*/}
              
              <h3 className="text-center fw-bold display-5 mb-5 pt-2">Our Awesome<span className="text-danger">Tour Destination</span></h3>
              <Row xs={1} md={3} className="g-4">

                {
                    destinations.map(item=> <Destination
                    item={item}
                    key={item._id}
                    ></Destination>)
                }

  
            </Row>
           </Container>
        </div>
        </div>
    );
};

export default TourDestination;