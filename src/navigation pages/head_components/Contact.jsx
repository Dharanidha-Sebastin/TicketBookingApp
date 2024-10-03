import React from "react";
import "./head_component_css/Contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="contactUs-container">
      <div className="top-contactUs">
        <p>
          <Link to="/Home">Home</Link>&nbsp;&gt;&nbsp;Contact Us
        </p>
      </div>
      <h3>Contact Us</h3>
      <table>
        <tr>
          <td>Address</td>
          <td>
            : State Express Transport Corporation Tamil Nadu Ltd.,<br />&nbsp; HeadOffice,
            Thiruvalluvar House,Pallavan Salai,<br />&nbsp;&nbsp;Chennai - 600002.
          </td>
        </tr>
        <tr>
          <td>e-Mail</td>
          <td>: commercial@tnstc.in</td>
        </tr>
        <tr>
          <td>Online Reservation Toll Free Number</td>
          <td>: 9513948001</td>
        </tr>
        <tr>
          <td>For Bank Queries</td>
          <td>: 044-49076326 / 49076316. pgsupport@billdesk.com</td>
        </tr>
      </table>
    </div>
  );
};

export default Contact;