import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='form-container mt'>
    <h1 class="baf">Book a <span class="site-red-color">FREE</span> trial class.
        </h1>

          <label>Email
            <span class="red-text">*</span>
            </label>
          <br/>
          <input type='email' className="input-form"/>
          <br/>
          <label>Graduation Year
            <span class="red-text">*</span>
            </label>
          <br/>
          <input type='number' className="input-form" min="2014" max="2022" required/>
          <br></br>
          <label>Phone Number
            <span class="red-text">*</span>
            </label>
          <br/>
          <input class="dis" disabled value="91"/><input type='number' className="dis1"/>
          <br></br>
          <div class="btm-session-0uter">
          <button type='submit' className="btn-session">Book Your Live Session</button>
          </div>
    </div> 
    
  )
}

export default Login