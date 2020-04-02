import React from 'react'

function SignUp(){
    return (
    <div class="container">
        <h2>Sign Up</h2>
      <div>
        <h1>
          Learn to code by
          <br /> 
          watching others
        </h1>
        <p id="p-mobile">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div>
        <div class="box box-blue">
          <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
        </div>
        <form class="box" id='form'>
          <div class="form-control">
            <input type="text" id="firstname" placeholder="First Name" />
            <img src="./images/icon-error.svg" alt="error-icon" /> 
            <small></small>
          </div>
          <div class="form-control">
            <input type="text" id="lastname" placeholder="Last Name" />
            <img src="./images/icon-error.svg" alt="error-icon" /> 
            <small></small>
          </div>
          <div class="form-control">
            <input type="email" id="email" placeholder="Email" />
            <img src="./images/icon-error.svg" alt="error-icon" /> 
            <small></small>
          </div>
          <div class="form-control">
            <input type="password" id="password" placeholder="Password" />
            <img src="./images/icon-error.svg" alt="error-icon" /> 
            <small></small>
          </div>

          <button>Claim your free trial</button>
          <small
            >By clicking the button, you are agreeing to our
            <a href>Terms and Services</a></small>
        </form>
      </div>
    </div>
    )
}
export default SignUp