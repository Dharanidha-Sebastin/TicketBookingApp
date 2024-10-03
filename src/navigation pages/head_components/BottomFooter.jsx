import React from "react";
import { Link } from "react-router-dom";
import './head_component_css/BottomFooter.css'
import techyBreezeLogo from '../images/techy_breeze_logo.jpeg'

const BottomFooter = () => {
  return (
    <div className="bottom-footer-container">
      <div className="container">
        <p className="ptag">© TNSTC. All Rights Reserved.</p>
        <div className="row">
          <div>
            <p>Powered by:</p>
            <Link to="">www.techybreeze.com</Link>
          </div>
          <img src={techyBreezeLogo} alt="techy_breeze_logo" />
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
