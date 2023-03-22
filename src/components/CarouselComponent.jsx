import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carouselcomponent.css';
import slideOne from '../slideOne.jpg';
import slideTwo from '../slideTwo.jpg';
import slideThree from '../slideThree.jpg';
import slideFour from '../slideFour.jpg';

export default function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="Carousel">
      <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-container'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slideOne}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slideTwo}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slideThree}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}