import React from 'react'
import img1 from "../busimage/transta1.png"
import img2 from "../busimage/transta2.png"
import img3 from "../busimage/transtalogo.png"
import "../css/TransactionStatus.css";


const TransactionStatus = () => {
  return (
    <div className='TransactionStatus'>
        <div className='TransactionStatus-logo-images'>
            <div className='TransactionStatus-bus'>
                <img src={img1} alt='img1' ></img>
            </div>

            <div className='TransactionStatus-center'>
                <img src={img3} alt='img2' ></img>
            </div>

            <div className='TransactionStatus-mirror'>
                <img src={img2} alt='img3' ></img>
            </div>
        </div>
        <div className='TransactionStatus-tit'>
            <i class="fa-solid fa-house"></i><p>PG REFUND / TRANSACTION ENQUIRY</p>
            
            
        </div>
        <div className='TransactionStatus-form'>
            <div id='TransactionStatus-form-1'>
                <p>PG REFUND / TRANSACTION ENQUIRY</p>
                <small>* Mandatory Field</small>
                
            </div>
            <hr></hr>
            <div id='TransactionStatus-form-2'>
                <p>Verify your PG REFUND / TRANSACTION DETAILS of your Journey Tickets</p>
            </div>
            <div id='TransactionStatus-form-3'>
                <input type="radio" />
                <label for="html">Transaction Status</label>
                <input type="radio" id='TransactionStatus-refund' />
                <label for="html">Refund</label>
            </div>
            <div id='TransactionStatus-form-4'>
                <form>
                    <label>OB Ref No.*</label>
                    <input type="text" id='TransactionStatus-form-4-input'/><br></br>
                    <input type="submit" id='TransactionStatus-form-4-submit' />
                    <button>Close</button>
                </form>
            </div>
            
            
        </div>
        <div id='TransactionStatus-form-5'>
                <p>.</p>
         </div>
    </div>
  )
}

export default TransactionStatus