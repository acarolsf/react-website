import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import ShopMen from "./../../assets/shopMens.jpg";
import ShopWomen from "./../../assets/shopWomens.jpg";

import "./styles.scss";

const SlideHome = (props) => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="directory">
      <div className="wrap">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item interval={1000} className="item">
            <div className="image">
              <img
                className="d-block w-100 h-50"
                src={ShopWomen}
                alt="First slide"
              />
            </div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500} className="item">
            <div className="image">
              <img
                className="d-block w-100 h-50"
                src={ShopMen}
                alt="Third slide"
              />
            </div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="item">
            <div className="image">
              <img
                className="d-block w-100 h-50"
                src={ShopWomen}
                alt="Third slide"
              />
            </div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default SlideHome;
