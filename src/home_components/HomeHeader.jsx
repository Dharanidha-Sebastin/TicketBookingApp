import React from "react";
import { Outlet, Link } from "react-router-dom";
import bus from "../navigation pages/images/bus.jpg";
import center from "../navigation pages/images/center.jpg";
import mirror from "../navigation pages/images/mirror.jpg";
import "../css/home_components_css/HomeHeader.css";

const HomeHeader = () => {
  return (
    <div className="header-layout">
      {/* creating language bar */}
      <div className="header-language">
        <p id="header-language-p">English | Tamil</p>
      </div>

      {/* creating main logo */}
      <div className="header-logo-img">
        <div className="header-bus">
          <img src={bus} alt="bus"></img>
        </div>

        <div className="header-center">
          <img src={center} alt="center"></img>
        </div>

        <div className="header-mirror">
          <img src={mirror} alt="mirror"></img>
        </div>
      </div>

      {/* creating nav bar */}
      <div className="header-nav">
        <ul>
          <Link to="/Home">
            <h3>Home</h3>
          </Link>

          <Link to="/">
            <h3>About Us</h3>
          </Link>
          <Link to="/TypesOfServices">
            <h3>Types of Services</h3>
          </Link>
          <Link to="/Terms">
            <h3>Terms & Conditions</h3>
          </Link>
          <Link to="/Hire">
            <h3>Hire a Bus</h3>
          </Link>
          <Link to="/Gallery">
            <h3>Gallery</h3>
          </Link>
          <Link to="/Contact">
            <h3>Contact Us</h3>
          </Link>
          <Link to="/Cancel Ticket">
            <h3>Cancel Ticket</h3>
          </Link>
          <Link to="/View Ticket">
            <h3>View Ticket</h3>
          </Link>
          <Link to="/TicketStatus">
            <h3>Ticket Status</h3>
          </Link>
          <Link to="/TransactionStatus">
            <h3>Refund/Transaction Status</h3>
          </Link>
          <Link to="/OpLogin">
            <h3>Operator Login</h3>
          </Link>
          <Link to="/EticLogin">
            <h3>E-Ticket Login</h3>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HomeHeader;
