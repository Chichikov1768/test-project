import React, { useState, useEffect, useRef, Component } from "react";
const Thumbnails = ({ images, current, onChange }) => {
    return (
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={index === current ? "selected" : ""}
            onClick={() => onChange(index)}
            style={{width:'4em',height:'2em',padding:'1em'}}
          />
        ))}
      </div>
    );
  };

  export default Thumbnails