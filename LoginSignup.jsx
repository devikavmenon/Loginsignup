import React from 'react'
import './CSS/LoginSignup.css'
export const LoginSignup = () => {
  return (
    <div className="loginsignup">
        <div className="loginsignup-container">
            <h1>Sign up</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="email" required />
                <input type="password" placeholder="password" required /><br></br>
            </div>
          
            <button>Continue</button>
            <p className="loginsignup-login">Already have an account? <span>Login here</span> </p>
            <div className="loginsignup-argee">
                <input type="checkbox" name='' id='' />
                <h6> By continuing I agree to the use of terms and privacy policy</h6>

            </div>



        </div>

    </div>
  )
}
