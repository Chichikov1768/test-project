import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import React from 'react';
import Slider from 'react-slick';
import { Grid, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel2 = ({ images }) => {
    if (images.length === 1) {
      return (
        <div style={{ maxWidth: 600, margin: 'auto' }}>
          <img src={images[0]} alt="Single Image" style={{ width: '100%', height: 'auto' }} />
        </div>
      );
    }
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div style={{ maxWidth: 600, margin: 'auto' }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index}`} style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };



export default Carousel2