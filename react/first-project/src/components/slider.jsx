import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../assets/images/bg-1.jpg";
import image2 from "../assets/images/bg-2.jpg";
import image3 from "../assets/images/bg-3.jpg";
import SliderStyle from '../css/slider.module.css'; 

export const Slider = () => (
    <Carousel>
        <Carousel.Item interval={1000}>
            <img className={`d-block w-100 ${SliderStyle['carousel-img']}`} src={image1} alt="First slide" />
            <Carousel.Caption>
                <h2>fashion sale</h2>
                <h3 >First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img className={`d-block w-100 ${SliderStyle['carousel-img']}`} src={image2} alt="Second slide" />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className={`d-block w-100 ${SliderStyle['carousel-img']}`} src={image3} alt="Third slide" />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
);
