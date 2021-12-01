// This is use for import important file for why choose us components
import React from 'react';
import { Col, Container,e, Row } from 'react-bootstrap';
import './WhyChooseUs.css'

// This use for Why Choose Us Components
const WhyChooseUs = () => {
    return (
        <div>
            <Container className="py-5 my-5 text-center">
                <h2 className="text-center fw-bold display-5 mb-5">Why <span className="text-danger"> Choose Us?</span></h2>
                {/* Here Added only one row */}
                <Row>

                    {/* This is first column in the row with the text of Diverse Destinations */}
                    <Col>
                        <h1 className="text-danger display-4 "><i class="fas fa-plane-departure"></i></h1>
                        <h4  className="mt-4 mb-3">Diverse Destinations</h4>
                        <p>Instead of letting visitors jump right into information about hotels and activities, the main navigation bar is organized by region.</p>
                    </Col>

                    {/* This is second column in the row with the text of Value for Money*/}
                    <Col>
                        <h1 className="text-danger display-4"><i class="fas fa-hand-holding-usd"></i></h1>
                        <h4  className="mt-4 mb-3">Value for Money</h4>
                        <p>From world class skiing to off mountain adventure and a charming town, see what makes our destination so special</p>
                    </Col>


                   {/* This is third column in the row with the text of Beautiful Places*/}
                    <Col>
                        <h1 className="text-danger display-4"><i class="fas fa-route"></i></h1>
                        <h4  className="mt-4 mb-3">Beautiful Places</h4>
                        <p>And while the photos are likely what initially draw readers in, what sets this site apart from others is the personal.</p>
                    </Col>

                    {/* This is fourth column in the row with the text of Passionate Travel*/}
                    <Col>
                        <h1 className="text-danger display-4"><i class="far fa-compass"></i></h1>
                        <h4 className="mt-4 mb-3">Passionate Travel</h4>
                        <p>After all, if a user were to arrive looking for details on a walking tour, but think they’d mistakenly come to the website.</p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default WhyChooseUs;