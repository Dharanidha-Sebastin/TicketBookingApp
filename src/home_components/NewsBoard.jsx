
import React from "react";
import "../css/home_components_css/NewsBoard.css";
const NewsBoard = () => {
  return (
    <div id="whole-coverage">
      <h4>News Board</h4>
      <div id="newsboard">
        <marquee direction="up" scrollamount="2">
          <p>
            The Hon'ble Chief Minister of Tamilnadu has inaugurated the new
            Air-conditioned Sleeper Buses, Ultra Deluxe Buses with Toilet
            facility & Non A/C Sleeper Buses for the Public 
            Tamilnadu.
          </p>
          <hr/>
          <p>
            Online Reservation facility for the Air-conditioned Sleeper Buses
            from Chennai-Salem-Chennai, Chennai-Madurai-Chennai,
            Chennai-Bodi-Chennai, Chennai-Keezhakarai-Chennai,
            Chennai-Karur-Chennai, Chennai-Erode-Chennai,
            Chennai-Sivakasi-Chennai, Chennai-Tirunelveli-Chennai,
            Coimbatore-Bengaluru-Coimbatore services are available for Online
            Booking.
          </p>
          <hr/>
        </marquee>
      </div>
    </div>
  );
};

export default NewsBoard;
