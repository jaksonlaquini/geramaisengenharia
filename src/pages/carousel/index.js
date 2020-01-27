import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from './../../img/banner/banner1.jpeg';
import banner2 from './../../img/banner/banner2.jpeg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img  className="d-block w-100"  src={banner2} alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="Second slide"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
