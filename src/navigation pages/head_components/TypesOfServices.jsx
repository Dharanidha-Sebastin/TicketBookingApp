import React from 'react'
import { Link } from 'react-router-dom'
import './head_component_css/TypesOfServices.css'

const TypesOfServices = () => {
  return (
    <div className='type-of-services-container'>
      <div className='top-tos'>
        <p><Link to="/Home">Home</Link>&nbsp;&gt;&nbsp;<span>Types Of Seervices</span></p>
      </div>
      <h3>Types Of Services</h3>
      <ul className="tos-list">
        <div>
          <li>AC Sleeper Buses</li>
          <li>AC Sleeper Seater Buses</li>
          <li>Deluxe Buses</li>
          <li>Ultra Deluxe with Toilet Buses</li>
        </div>
        <div>
          <li>Non-AC Sleeper Buses</li>
          <li>Air Condition Buses</li>
          <li>Ultra Deluxe Buses</li>
        </div>
      </ul>
    </div>
  )
}

export default TypesOfServices