import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ticket_login_img from "./images/ticket_login_img.png";
import eBooking_tdfc from "./images/eBooking_tdfc.gif";
import "../css/EticLogin.css";

const EticLogin = () => {
  const [inputs, setInputs] = useState({
    Username: "",
    Password: "",
  });
  const [Error, setError] = useState("");
  const [Error1, setError1] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    if (inputs.Username === "") {
      setError("Username should not be Empty");
    } else {
      setError("");
    }
    if (inputs.Password === "") {
      setError1("Password is empty");
    } else {
      setError1("");
    }
  };
  return (
    <div className="E-ticket-login-container">
      {/* main container */}
      <div className="E-Ticket-Login">
        {/* inside container */}
        <div className="e-ticket-container">
          {/* img */}
          <div className="e-img">
            <img src={ticket_login_img} alt="ticket_login_img" />
          </div>
          {/*Home button */}
          <div className="EticLoginForm">
            <button type="Button">Home</button>
          </div>
          {/* flex div */}
          <div className="row1">
            {/* left */}
            <div className="e-ticket-left">
              <img
                id="bus-image"
                src="https://www.tnstc.in/innerHtmls/images/hire-a-bus.jpg"
                alt="bas"
              />
              <img src={eBooking_tdfc} alt="eBooking_tdfc" />
            </div>
            {/* right */}
            <div className="e-ticket-right">
              <h4>TNSTC E-Ticket Reservetion</h4>
              <form onSubmit={handleSubmit}>
                <fieldset>
                  <legend>Sign In</legend>
                  <label>Username *&nbsp;:&nbsp;&nbsp;</label>
                  <input type="text" name="Username" value={inputs.name} onChange={handleChange} />
                  <div className="error-div-eticket">
                    <small>{Error}</small>
                  </div>
                  <label>Password *&nbsp;&nbsp;:&nbsp;&nbsp;</label>
                    <input type="password" name="Password" value={inputs.Password} onChange={handleChange} />
                  <div className="error-div-eticket">
                    <small>{Error1}</small>
                  </div>
                  <p>Mandatory Field *</p>
                  <p>forgot Password?</p>
                  
                    <button id="fist-btn" type="submit">Sign In</button>
                    <button id="second-btn" type="submit">Reset</button>
            
                </fieldset>
                <h6>
                  | <Link to="/EticLogin/Account">Create An Account</Link> |
                </h6>
              </form>
            </div>
          </div>
          <div className="e-ticket-foot"></div>
        </div>
      </div>
    </div>
  );
};

export default EticLogin;
