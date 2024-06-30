import React from 'react';
import Slider from 'react-slick';
import { Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel3 = ({ images }) => {
  if (images.length === 1) {
    return (
      <div style={{ maxWidth: 600, margin: 'auto', position: 'relative' }}>
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
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', position: 'relative' }}>
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

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        zIndex: 2
      }}
    >
      <ArrowForward />
    </IconButton>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        zIndex: 2
      }}
    >
      <ArrowBack />
    </IconButton>
  );
};

export default Carousel3;