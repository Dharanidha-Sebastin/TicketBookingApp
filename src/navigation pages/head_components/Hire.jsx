import React from "react";
import { Link } from "react-router-dom";
import "./head_component_css/Hirebus.css";
import tab from "../images/tab.png";

const Hire = () => {
  return (
    <div className="hire-container">
      <div className="top-hire">
        <p><Link to="/Home">Home</Link>&nbsp;&gt;&nbsp;<span>Hire a Bus</span></p>
      </div>
      <h3>Casual Contract &#40;Hire a Bus&#41;</h3>
      <div className="hire-content">
        <img
          id="bus-image"
          src="https://www.tnstc.in/innerHtmls/images/hire-a-bus.jpg"
          alt="bus"
        />
        <img id="tbus" src={tab} alt="/bus details" />
        <div>
          <br />
          <p style={{color:"red"}}><b>Important terms and conditions:</b></p>
          <br />
          <p>
            The kilometres will be calculated from the operating depot and
            return to the same depot. Payment has to be made in advance along
            with 20% refundable security deposit. For late arrivals, extra
            amount will be charged.
          </p>
          <br />
          <p>
            The charges for late reporting
            <br />
            1 Hour to 6 Hours - ¼ day of the hire charges
            <br />
            6 Hour to 8 Hours - ½ day of the hire charges
            <br />
            8 Hour and above - Full day hire charges
            <br />
            Applicable G.S.T.
          </p>
          <br />
          <p>
            For contract (Hire a Buses) booking contact: 9445014463 / 9445014424
            /9445014416.
            <br />
            Apart from the above buses will be provided for pick and drop local
            trip & short distance on hire basis for any clarification
            <br />
            please contact: 9445014463 / 9445014424 / 9445014416.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hire;
