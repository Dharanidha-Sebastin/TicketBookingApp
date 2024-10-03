import React from "react";
import kanyakumari from "../busimage/kanyakumari.jpg";
import marina from "../busimage/marina.jpg";
import meenakshi from "../busimage/meenakshi.jpg";
import cuddalore from "../busimage/cuddalore.jpg";
import "../css/home_components_css/HomeFooter.css";

const HomeFooter = () => {
  return (
    <div className="HomeFooter">
      <h4>Top Places</h4>
      <section className="top">
          <figure>
            <img src={kanyakumari} alt="kanyakumari"></img>
            <figcaption>Kanyakumari</figcaption>
          </figure>
          <figure>
            <img src={marina} alt="marina"></img>
            <figcaption>Marina Beach</figcaption>
          </figure>
          <figure>
            <img src={cuddalore} alt="cuddalore"></img>
            <figcaption>Cuddalore</figcaption>
          </figure>
          <figure>
            <img src={meenakshi} alt="meenakshi"></img>
            <figcaption>Meenakshi Temple</figcaption>
          </figure>
      </section>
      <section className="HomeFooter-red">
        <div id="HomeFooter-red-box">
          <p>&#9658;&#160;Information</p>
          <p>&#9658;&#160;Rules & Regulation</p>
          <p>&#9658;&#160;Reservation Center</p>
        </div>
        <div id="HomeFooter-red-box">
          <p>&#9658;&#160;Special Service</p>
          <p>&#9658;&#160;Counter Address</p>
          <p>&#9658;&#160;Suggestion</p>
        </div>
        <div id="HomeFooter-red-box">
          <p>&#9658;&#160;Compatible Browser</p>
          <p>&#9658;&#160;Browser Settings</p>
          <p>&#9658;&#160;FAQs</p>
        </div>
        <div id="HomeFooter-red-box">
          <p>&#9658;&#160;Privacy Policy</p>
          <p>&#9658;&#160;Feedback</p>
          <p>&#9658;&#160;Site Map</p>
        </div>
        <div id="HomeFooter-red-box">
          <p>&#9658;&#160;User Manual</p>
        </div>
        <div id="HomeFooter-red-box">
          <p>&#9658;&#160;Number of Hits: 192,663,809</p>
        </div>
      </section>
     
      
    </div>
  );
};

export default HomeFooter;
