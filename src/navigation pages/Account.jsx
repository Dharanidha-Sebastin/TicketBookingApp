import React from "react";
import "../css/Account.css";
import header1 from "../busimage/routetable/HEADER_01.gif";
import header2 from "../busimage/routetable/HEADER_03.gif";
import header3 from "../busimage/routetable/HEADER_05.gif";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="account-container">
      <div className="accont-main">
        <div className="account-inner-container">
          <div className="account-head">
            <img src={header1} alt="header1" />
            <img src={header2} alt="header2" />
            <img src={header3} alt="header3" />
          </div>
          <div className="account-bg"></div>

          {/* form section */}
          <form className="account-form">
            <fieldset>
              <legend>Member Registration</legend>

              <b>Account Information</b>
              <p className="p-normal">
                <label htmlFor="">Username : </label>
                <input type="text" name="" id=""/><span className="star">*</span>
              </p>

              <p>User Name is your valid email ID.</p>

              <p className="p-normal p-flex">
                <div>
                  <label htmlFor="">Password : </label>
                  <input type="password" name="" id=""/><span className="star">*</span>
                </div>
                <div>
                  <label htmlFor="">Confirm Password : </label>
                  <input type="password" name="" id=""/><span className="star">*</span>
                </div>
              </p>

              <p>Password must be minimum of 6 characters & maximum of 25 characters</p>

              <b>Personal Information</b>

              <p className="p-normal p-flex">
                <div>
                  <label htmlFor="">Mobile No : </label>
                  <input type="text" name="" id=""/><span className="star">*</span>
                </div>
                <div>
                  <label htmlFor="">Mail Id : </label>
                  <input type="text" name="" id=""/><span className="star">*</span>
                </div>
              </p>

              <p><span className="star">*</span>Fields marked with &#40;<span className="star">*</span>&#41; are compulsory.</p>

              <div className="strong">
                <strong>
                  <input type="checkbox" name="" id="" />I agree to the <Link to="#">Terms Of Service</Link>
                </strong>
              </div>

              <div>
                <button type="submit" className="account-register">Register</button>
                <button type="reset" className="account-rest">Reset</button>
                <Link to="/Home" className="account-close">Close</Link>
              </div>
            </fieldset>
          </form>
          <div className="account-bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Account;
