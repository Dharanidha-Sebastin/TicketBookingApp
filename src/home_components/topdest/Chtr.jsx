// import React from 'react'
import React, { useState, useEffect } from "react";
const Chtr = () => {
    const [getname, setGetname]=useState([]);
    
    useEffect(()=>{
        var place='Trichy'
        fetch(`http://localhost:8080/route/getRoute?from=${place}`)
        .then((res)=>res.json())
        .then((result)=>{
            setGetname(result)
        });
      }, []);
  return (
    <div>
    <div>Chtr</div>
    <div className="table-area">
          <table>
            <thead>
              <tr>
                <th>from</th>
                <th>to</th>
                <th>time</th>
                <th>route_no</th>
                <th>service</th>
                <th>bus_no</th>
                <th>bus_fare</th>
                <th>trip_code</th>
              </tr>
            </thead>
            <tbody>
              {getname.map((stud)=>(
                <tr>
                  <td>{stud.from}</td>
                  <td>{stud.to}</td>
                  <td>{stud.time}</td>
                  <td>{stud.route_no}</td>
                  <td>{stud.service}</td>
                  <td>{stud.bus_no}</td>
                  <td>{stud.bus_fare}</td>
                  <td>{stud.trip_code}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* ID:{stud.id}
          <br></br>
          Name:{stud.names}
          <br></br>
          Email:{stud.email}
          <br></br>
          PASSWORD:{stud.password}
          <br></br>
          conformpassword:{stud.conformpassword}
          <br></br>
          MOBILE:{stud.mobile}
          <br></br> */}
        </div>
        </div>
  )
}

export default Chtr