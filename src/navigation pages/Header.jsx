import React from "react";
import { Outlet, Link } from "react-router-dom";
import bus from "./images/bus.jpg";
import center from "./images/center.jpg";
import mirror from "./images/mirror.jpg";
import "./Header.css";
import BottomFooter from "./head_components/BottomFooter";
// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Header = () => {
  return (
    <div className="header-layout-container">
      <div className="header-top">
        {/* creating language bar */}
        <div className="header-language"><p id="header-language-p">English | Tamil</p></div>

        {/* creating main logo */}
        <div className="header-logo-img">
          <div className="header-bus"><img src={bus} alt="bus"></img></div>
          <div className="header-center"><img src={center} alt="center"></img></div>
          <div className="header-mirror"><img src={mirror} alt="mirror"></img></div>
        </div>

        {/* creating nav bar */}
        <div className="header-nav">
          <ul>
            <Link to="/Home"><h3>Home &#160;|</h3></Link>
            <Link to="/About"><h3>About Us &#160;|</h3></Link>
            <Link to="/TypesOfServices"><h3>Types of Services &#160;|</h3></Link>
            <Link to="/Terms"><h3>Terms & Conditions &#160;|</h3></Link>
            <Link to="/Hire"><h3>Hire a Bus &#160;|</h3></Link>
            <Link to="/Gallery"><h3>Gallery &#160;|</h3></Link>
            <Link to="/Contact"><h3>Contact Us &#160;|</h3></Link>
          </ul>
        </div>
      </div>

      {/* creating side sections */}

      <div className="body-section">
        <section className="sidebar">
          <div className="header-know-more">
            <h4>Know More About </h4>
            <hr />
            <h3>&#8811;&nbsp;&nbsp;<Link to="/Information">Information</Link></h3>
            <h3>&#8811;&nbsp;&nbsp;<Link to="/Rules">Rules & Regulations</Link></h3>
            <h3>&#8811;&nbsp;&nbsp;<Link to="/Reservation">Reservation Center</Link></h3>
            <h3>&#8811;&nbsp;&nbsp;<Link to="/Special">Special Services</Link></h3>
          </div>

          <div className="header-General-info">
            <h4>Counter Address</h4>
            <hr />
            <h3>&#8811;&nbsp;&nbsp;<Link to="/Counter">Counter Address</Link></h3>
            <h3>&#8811;&nbsp;&nbsp;<Link to="/Suggestions">Suggestions</Link></h3>
            <h3>&#8811;&nbsp;&nbsp;<Link to="/Compatible">Compatible Browsers</Link></h3>
            <h3>&#8811;&nbsp;&nbsp;<Link to="/Browser">Browser Settings</Link></h3>
            <h3>&#8811;&nbsp;&nbsp;<Link to="/FAQs">FAQs</Link></h3>
            <h3>&#8811;&nbsp;&nbsp;<Link to="/Privacy">Privacy</Link></h3>
          </div>
        </section>
      </div>
      <BottomFooter />
      <Outlet />
    </div>
  );
};

export default Header;
