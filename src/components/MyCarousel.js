// src/MyCarousel.js

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/MyCarousel.css'
import img1 from '../assets/background.jpg'; // Replace with your image paths
import img2 from '../assets/reserved.jpg';
import img3 from '../assets/dessert.jpg';
import img4 from '../assets/restaurant.jpg';
import img5 from '../assets/restaurant2.jpg';
import img6 from '../assets/restaurant3.webp';
import img7 from '../assets/restaurant4.jpg';
import img8 from '../assets/appetizer2.jpg';


const MyCarousel = () => {
    return (
        <Carousel fade className='carousel'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />
                {/* <Carousel.Caption>
                    <h3>Third Slide Label</h3>
                    <p>Some description for the third slide.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img4}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img5}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img6}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img7}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img8}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel;
