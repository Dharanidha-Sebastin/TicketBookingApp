import React from 'react'
import { Link } from 'react-router-dom'
import './head_component_css/About.css'
import pdf1 from './pdf/Tamil Nadu STUs-pages.pdf'
import pdf2 from './pdf/History-of-SETC.pdf'

const About = () => {
  return (
    <div className="About-us-container">
      <div className='top-about'>
        <p><Link to="/Home">Home</Link>&nbsp;&gt;&nbsp;Know More About&nbsp;&gt;&nbsp;<span>About Us</span></p>
      </div>
      <h3>About Us</h3>
      <table>
        <tr>
          <td>1</td>
          <td>History of Tamil Nadu State Transport Undertakings.</td>
          <td><Link to={pdf1} target="_blank">pdf</Link></td>
        </tr>
        <tr>
          <td>2</td>
          <td>History of SETC.</td>
          <td><Link to={pdf2} target="_blank">pdf</Link></td>
        </tr>
      </table>
    </div>
  )
}

export default About