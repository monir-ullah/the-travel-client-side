// This is use for import all import file for Popular cities section
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './PopularCities.css'


// This is use for Popular Cities components. 
const PopularCities = () => {
    return (
        // This is full area with white smoke color
        <div className="bg-popular-cities ">
            <Container className="py-5 my-5">
                {/* THis is the text Popular Cities */}
                <h3 className="text-center fw-bold display-5 mb-5">Popular <span className="text-danger">Cities</span></h3>
                {/* This is the paragrap. Below the Popular cities heading */}
                <p className="text-center mb-5">World's leading Hotel Booking website,Over 30,000 Hotel rooms worldwide. Book Hotel rooms and enjoy your holidays with distinctive experience.While some of the company’s customers might be traveling within Colombia, they’ve clearly determined that many of their tour attendees come from English-speaking countries. By making all of their information available in English, Toucan expands their audience and makes sure they don’t miss out on potential customers because of a language barrier.</p>

                {/*This is Row   */}
                <Row>
                    {/* This is first image. In the popular cities area. That took 50% width among all image(First Portion) */}
                    <Col md={6}>
                        <img  className="img-fluid rounded-3" src="http://rn53themes.net/themes/demo/travelz/images/listing/home.jpg"></img>
                    </Col>

                    {/* This is the second Portion in the area. That that another 50% of this section. And divided into the all image in the section part */}
                    <Col md={6}>
                    <Row >
                        {/* 2nd Image */}
                        <Col md={6}>
                        <img className="img-fluid rounded-3" src="http://rn53themes.net/themes/demo/travelz/images/listing/home3.jpg"></img>
                        </Col>

                        {/* 3rd image  */}
                        <Col md={6}>
                        <img className="img-fluid rounded-3" src="http://rn53themes.net/themes/demo/travelz/images/listing/home1.jpg"></img>
                        </Col>
                    </Row>
                    
                    <Row className="mt-3">
                        {/*  4th Image */}
                        <Col md={6}>
                        <img className="img-fluid rounded-3" src="http://rn53themes.net/themes/demo/travelz/images/listing/home2.jpg"></img>
                        </Col>
                        {/* 5th image */}
                        <Col md={6}>
                        <img className="img-fluid rounded-3" src="http://rn53themes.net/themes/demo/travelz/images/listing/home4.jpg"></img>
                        </Col>
                    </Row>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PopularCities;