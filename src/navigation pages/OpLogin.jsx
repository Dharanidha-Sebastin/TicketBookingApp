import React from 'react'
import "../css/OpLogin.css";

const OpLogin = () => {
  return (
    <div>
	<div className="OpLogin">
      <h1>	TNSTC Operator Login</h1>
      <form>
        <div className='OpLoginForm'>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
		<button type="submit">Login</button>
		<button type="submit">Reset</button>
          
    </div>
        </div>
      </form>
    </div>
      
    </div>
  )
}

export default OpLogin