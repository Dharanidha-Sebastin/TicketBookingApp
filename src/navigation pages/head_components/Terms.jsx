import React from "react";
import "./head_component_css/Terms.css";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="terms-container">
      <div>
        <div className="term">
          <p><Link to="/Home" >Home</Link>&nbsp;&gt;&nbsp;<span>Terms & Conditions</span></p>
        </div>
        <h3>Terms & Conditions</h3>
        <div className="condition">
          <ol>
            <li>TNSTC provides only the facility for transacting with SETC and TNSTC’s Passenger Reservation System through the Internet. TNSTC’s rules for reservation and booking apply to all such transaction along with special conditions imposed for Internet based booking. The special conditions and terms of service applicable to Internet booking are detailed in this document.</li>
            <li>The following terms and conditions will apply if you wish to use the TNSTC’s online ticket booking service offered through the TNSTC website. Please go through the conditions carefully and if you accept them, you may register and transact on the site, you are deemed to have agreed to the terms and conditions set’ forth below. If you do not agree with these terms and conditions, you must not transact on this Website. Once you have clicked the ‘Agree’ button at the bottom of Terms and Conditions at login page, you have entered into a formal agreement with TNSTC for the purpose of transactions on this website.</li>
            <li>If a user violates the terms and conditions of use by registering more than one user ID and /or booking tickets on such multiple user IDs, TNSTC reserves the right to deactivate all such user registration and cancel any or all tickets booked using these registrations without any notice.</li>
            <li>TNSTC’s performance of this agreement is subject to existing laws and legal processes of Government of India and nothing contained in this agreement is in derogation of TNSTC’s right to comply with law enforcement requests or requirements relating to your use of this Web Site or information provided to or gathered by TNSTC with respect to such use. You agree that TNSTC may provide details of your use of the Web Site to regulators or police or to any other third party, or in order to resolve disputes or complaints which relate to the Web Site, at TNSTC’s complete discretion.</li>
            <li>If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth herein, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect.</li>
            <li>This agreement constitutes the entire agreement between the customer and TNSTC with respect to this Web Site and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between the customer and TNSTC with respect to this Web Site. A printed version of this agreement and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to this agreement to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form.</li>
            <li>Boarding Points are provided for the benefit of reserved passengers. Instead of coming to Origin Point, the reserved passengers can board the bus in the en route boarding points. How ever, the fare will be collected from previous stage of the Boarding Point</li>
            <li>It is the sole discretion of Management to Provide/ remove the stage or Boarding Points in any Route.</li>
            <li>The Reservation fee and other Applicable charges should be paid by the commuters in all the mode of bookings. Even the passengers who are availing the Concession like Senior Citizen or differently abled should pay the Reservation fee and other Applicable Charges.</li>
          </ol>
          <p><strong><u>Procedure for booking e-Ticket / Mobile tickets:</u></strong></p>
          <p>Online Booking (Internet Booking) will enable the passenger to book the seats and cancel the ticket even from remote places where TNSTC Corporations Bus Services operates. The procedure and guidelines for Internet booking (called, Online booking) are detailed as below:</p>
          <ol>
            <li>Booking can be made by registered user through the Internet. Registered User will be given username and password after filling an E-form on the Internet by giving his personal details.</li>
            <li>Tickets can be booked and Payments for tickets booked will have to be made through Credit card / Internet Banking.</li>
            <li>Passenger booking the ticket will have to login to TNSTC website and proceed through the link provided for Advance Booking. The passenger will select the seats in a service of his choice based on the availability.</li>
            <li>During the booking process, the passenger will have to select Identity Type and submit ID No. for confirming his identity during the journey. He can select from any of the Photo Identity Cards i.e. Passport, Driving License, Voter ID Card, PAN Card, Ration Card (passenger's).</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Terms;
