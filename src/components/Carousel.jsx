import React, { useState, useEffect, useRef, Component } from "react";
import Thumbnails from "./Thumbnails"


const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const goToPrevious = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const goToNext = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handleThumbnailClick = (index) => {
      setCurrentImageIndex(index);
    };
  
    return (
      <div className="carousel">
        <div className="main-image">
          <img
            src={images[currentImageIndex]}
            // alt={`Image ${currentImageIndex}`}
            onClick={goToNext}
            style={{width:'100%',height:'50%'}}
          />
          <div
            className="click-area-left"
            onClick={goToPrevious}
          ></div>
          <div className="click-area-right" onClick={goToNext}></div>
        </div>
        <Thumbnails
          images={images}
          current={currentImageIndex}
          onChange={handleThumbnailClick}
        />
        <button onClick={goToPrevious}>Попереднє/Previous</button>
        <button onClick={goToNext}>Наступне/Next</button>
      </div>
    );
  };

  export default Carousel 