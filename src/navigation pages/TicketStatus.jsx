import React from 'react'
import bus from "./images/bus.jpg";
import center from "./images/center.jpg";
import mirror from "./images/mirror.jpg";
import "../css/TicketStatus.css"


const TicketStatus = () => {
  return (
    <div className='TicketStatus'>
        <div className='TicketStatus-language'>
            <p>English | Tamil</p>
        </div>
        <div className='TicketStatus-logo-images'>
            <div className='TicketStatus-bus'>
                <img src={bus} alt='bus' ></img>
            </div>

            <div className='TicketStatus-center'>
                <img src={center} alt='center' ></img>
            </div>

            <div className='TicketStatus-mirror'>
                <img src={mirror} alt='mirror' ></img>
            </div>
        </div>
        <div className='TicketStatus-nav'>
            <div id='TicketStatus-nav-1'>
                <ul>
                    <li>Home &#160;|</li>
                    <li>About Us &#160;|</li>
                    <li>Type of Service &#160;|</li>
                    <li>Terms & Conditions &#160;|</li>
                    <li>Hire a bus &#160;|</li>
                    <li>Gallery &#160;|</li>
                    <li>Contact Us &#160;|</li>
                </ul>
            </div>
            <div id='TicketStatus-nav-2'>
                <ul>
                    <li>Ticket Status</li>
                    <li>&#160;</li>
                </ul>
            </div>
            <div id='TicketStatus-nav-3'>
                <i class="fa-solid fa-user" style={{marginLeft:"30px"}}></i>
                <p style={{marginLeft:"07px"}}>Operator Login</p>
                
                <i class="fa-solid fa-desktop" style={{marginLeft:"30px"}}></i>
                <p style={{marginLeft:"07px"}}>E-ticket login</p>
            </div>
        </div>
        <div className='TicketStatus-pnr'>
            <div id='TicketStatus-pnr-1'>
                <h5>PNR Status</h5>
            </div>
            <div id='TicketStatus-pnr-2'>
                <form>
                    <label>Enter PNR No.:</label>
                    <input type="text" />
                    <input type="submit" id='submit-btn'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default TicketStatus