import React from "react";
import '../css/home_components_css/Topdestination.css'
import { Link } from 'react-router-dom'


const Topdestination = () => {
  
  return (
    <div className="Topdestination-container">
      <div id="topdestination-header">
        <h4>Top Destination</h4>
      </div> 

      <div id="topdestination-main-tag">
        <div id="topdestination-text-area">
          <ul>
            <li><Link to="/TopDestination/RouteTable" >Chennai - Madurai</Link></li>
            <li><Link to="/TopDestination/Chtr">Chennai - Trichy</Link></li>
            <li><Link to="">Chennai - Tirunelveli</Link></li>
            <li><Link to="">Chennai - Nagercoil</Link></li>
            <li><Link to="">Chennai - Kanyakumari</Link></li>
            <li><Link to="">Chennai - Coimbatore</Link></li>
            <li><Link to="">Chennai - Kumbakonam</Link></li>
            <li><Link to="">Chennai - Salem</Link></li>
            <li><Link to="">Chennai - Theni</Link></li>
            <li><Link to="">Chennai - Karur</Link></li>
          </ul>
        </div>
        <div id='topdestination-text-area'>
          <ul>
              <li><Link to="">Chennai - Hosur</Link></li>
              <li><Link to="">Chennai - Pudukottai</Link></li>
              <li><Link to="">Chennai - Erode</Link></li>
              <li><Link to="">Chennai - Kodaikanal</Link></li>
              <li><Link to="">Chennai - Mysuru</Link></li>
              <li><Link to="">Chennai - Ooty</Link></li>
              <li><Link to="">Chennai - Rameswaram</Link></li>
              <li><Link to="">Chennai - Shencottah</Link></li>
              <li><Link to="">Chennai - Tiruchendur</Link></li>
              <li><Link to="">Chennai - Tirunelveli</Link></li>
          </ul>
        </div>
        <div id='topdestination-text-area'>
          <ul>
              <li><Link to="">Coimbatore - Bengaluru</Link></li>
              <li><Link to="">Coimbatore - Chennai</Link></li>
              <li><Link to="">Bengaluru - Chennai</Link></li>
              <li><Link to="">Bengaluru - Nagercoil</Link></li>
              <li><Link to="">Bengaluru - Trichy</Link></li>
              <li><Link to="">Bengaluru - Tirunelveli</Link></li>
              <li><Link to="">Bengaluru - Karur</Link></li>
              <li><Link to="">Ernakulam - Chennai</Link></li>
              <li><Link to="">Erode - Chennai</Link></li>
              <li><Link to="">Erode - Bengaluru</Link></li>
          </ul>
        </div>
        <div id='topdestination-text-area'>
          <ul>
              <li><Link to="">Dindigul - Chennai</Link></li>
              <li><Link to="">Karaikudi - Chennai</Link></li>
              <li><Link to="">Karur - Chennai</Link></li>
              <li><Link to="">Kumbakonam - Chennai</Link></li>
              <li><Link to="">Madurai - Chennai</Link></li>
              <li><Link to="">Tirupathi - Trichy</Link></li>
              <li><Link to="">Tirupathi - Madurai</Link></li>
              <li><Link to="">Tirupathi - Karur</Link></li> 
              <li><Link to="">Tirupathi - Tirunelveli</Link></li>
              <li><Link to="">Tirupathi - Kumbakonam</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topdestination;
