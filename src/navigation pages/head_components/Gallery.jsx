import React from "react";
import "./head_component_css/Gallery.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import { Link } from "react-router-dom";
const Gallery = () => {
  return (
    <div className="gallery-container">
      <center>
      <div id="full">
        <div className="top-gallery">
          <p><Link to="/Home">Home</Link>&nbsp;&gt;&nbsp;Gallery&nbsp;&gt;&nbsp;<span>Photos</span></p>
        </div>
        <h3>Photos</h3>
        <div className="gallery-img"><div/>
          <img id="part3" src={image1} alt="image1" /></div>
          <img id="part4" src={image2} alt="image2" /></div>
        
          </center>
    </div>
  );
};

export default Gallery;
