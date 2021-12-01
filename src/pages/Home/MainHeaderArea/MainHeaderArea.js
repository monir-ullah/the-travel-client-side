import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MainHeaderArea.css'

const MainHeaderArea = () => {
    return (
        <div className="index-position">
            
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/BB807Pr/consul-bg-2.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h1>Plan Your Travel Now!</h1>
                <p>Special Tour in April, Discover Australia for 100 customers with discount 50%</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/whBdb26/consul-bg-1.png"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h1>STANDARDIZED BUDGET ROOMS</h1>
                <p>Experience the various exciting tour and travel packages and Make hotel reservations, find vacation packages, search cheap hotels and events</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ibb.co/SwGwVxq/consul-bg.png"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h1>Register with your embassy</h1>
                <p>World's leading tour and travels Booking website,Over 30,000 packages worldwide. Book travel packages and enjoy your holidays with distinctive experience</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default MainHeaderArea;