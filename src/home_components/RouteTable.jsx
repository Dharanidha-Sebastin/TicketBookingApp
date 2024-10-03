import React, { useEffect, useState } from "react";
import "../css/home_components_css/RouteTable.css";
import  header1 from '../busimage/routetable/HEADER_01.gif'
import  header2 from '../busimage/routetable/HEADER_03.gif'
import  header3 from '../busimage/routetable/HEADER_05.gif'
import { Link } from "react-router-dom";


const RouteTable = () => {
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/route/getAllRoute")
      .then((res) => res.json())
      .then((result) => {
        setRoutes(result);
      });
  }, []);

  return (
    <div className="routetable-container">
      <div className="routetable-inside-container">
        <div className="routetable-head">
          <img src={header1} alt="header1" />
          <img src={header2} alt="header2" />
          <img src={header3} alt="header3" />
        </div>
        <div className="routetable-welcome">
          <p>Welcome : Guest</p>
        </div>
        <div className="routetable-available">
          <p>AdvanceBooking&nbsp;&gt;&nbsp;Search Place&nbsp;&gt;&nbsp;Search for Services&nbsp;&gt;&nbsp;<span>Availability</span></p>
        </div>
        <div className="routetable-main">
          <p className="routetable-as">Available Services</p>
          <p className="routetable-ms">Modify Search</p>
          <div className="routetable-table-top">
            <p>place from to destination</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
                <th>Total Seats</th>
                <th>Route No</th>
                <th>Service</th>
                <th>Bus No</th>
                <th>Bus Fare</th>
                <th>Trip Code</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route) => (
                <tr>
                  <td>{route.from}</td>
                  <td>{route.to}</td>
                  <td>{route.time}</td>
                  <td>{route.seat}</td>
                  <td>{route.route_no}</td>
                  <td>{route.service}</td>
                  <td>{route.bus_no}</td>
                  <td>{route.bus_fare}</td>
                  <td>{route.trip_code}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul>
            <li><span className="star">*</span>Click on <span className="lin">Trip Code</span> link to view Fare , Seat Availability & Pickup Points.</li>
            <li><span className="star">*</span>Distance and Journey hours are approximate.</li>
            <li><span className="star">*</span>Concessions and Levies are applicable as per rules.</li>
          </ul>
          <div className="goback">
            <Link to="/Home">Go back</Link>
          </div>
        </div>
        <div className="routetable-footer"></div>
      </div>
    </div>
  );
};

export default RouteTable;
