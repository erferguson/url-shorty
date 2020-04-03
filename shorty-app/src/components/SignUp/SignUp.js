import React from 'react'
import ErrorLogo from '../../Assets/error-icon'

import { Alert } from '../../images/icon-error.svg'

function SignUp(){
    return (
    <div className="su-container">
        <h2>Sign Up</h2>
      <div>
        <h1 className="su-h1">
          Learn to code by
          <br /> 
          watching others
        </h1>
        <p className="su-p" id="p-mobile">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div>
        <div className="su-box box-blue">
          <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
        </div>
        <form className="su-box" id='form'>
          <div className="form-control">
            <input type="text" id="firstname" placeholder="First Name" />
            <ErrorLogo /> 
            <small></small>
          </div>
          <div className="form-control">
            <input type="text" id="lastname" placeholder="Last Name" />
            <ErrorLogo />  
            <small></small>
          </div>
          <div className="form-control">
            <input type="email" id="email" placeholder="Email" />
            <ErrorLogo /> 
            <small></small>
          </div>
          <div className="form-control">
            <input type="password" id="password" placeholder="Password" />
            <ErrorLogo />  
            <small></small>
          </div>

          <button>Claim your free trial</button>
          <small
            >By clicking the button, you are agreeing to our
            <a href>Terms and Services</a></small>
        </form>
      </div>
      <script src="../script.js"></script>
    </div>
    )
}
export default SignUp