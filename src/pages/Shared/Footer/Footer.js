// This is for Import important file
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

// This is use for Footer Components
const Footer = () => {
    return (

        // footer-area className use for footer height and background color
        <div className="footer-area">
            <Container className="mt-5 pt-5 ">
                <Row className="py-5">
                    {/* This is use for Holiday tour & travels portion */}
                <Col>
                    <h5 className="pb-3">HOLIDAY TOUR & TRAVELS</h5>
                    <p>The world is a book and those who do not travel read only one page.Get special rates found nowhere else ipsum habitant.
                    You drive to adventures, we get it. We and our roadside assistance partners
                    </p>
                </Col>

                {/* This is use for Address & Contact info portion */}
                <Col>
                    <h5 className="pb-3">ADDRESS & CONTACT INFO</h5>
                    <p>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A. Landmark : Next To Airport
                    </p>
                    <h5>PHONE: +101-1231-1231</h5>
                </Col>

                {/* This is use for Support & Help portion */}
                <Col>
                    <h5 className="pb-3">SUPPORT & HELP</h5>
                    <Row>
                    <Col md={4}>
                        <p>About Us </p>
                        <p>Feedbacks</p>
                        <p>BlogUse</p>
                        <p>Advertise us</p>
                        <p>Vacations</p>                      
                    </Col>
                    <Col md={4}>
                        <p>FAQ</p>
                        <p>Cases</p>
                        <p>Offers</p>
                        <p>Discount</p>
                        <p>Branding</p>
                    </Col>
                    </Row>
                </Col>
                     {/* This is use for Holiday Follow with us portion */}
                <Col>
                    <h5 className="pb-3">FOLLOW WITH US</h5>
                    <p>Join the thousands of other There are many variations of passages of Lorem Ipsum available</p>
                </Col>
                </Row>
                {/* This is use for Copyrights footer section */}
               <Row >
                   <Col >
                   <p className="text-center ">Copyrights © 2021 Company Name. All Rights Reserved. This Project Done By Monir Ullah</p>
                   </Col>
               </Row>
                
            </Container>
        </div>
    );
};

export default Footer;