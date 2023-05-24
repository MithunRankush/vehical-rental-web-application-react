import resetpwd from '../img/resetpwd.png'
import React from 'react'
import { Link } from 'react-router-dom'
import './resetpwd.css'


export default function Register() {
  let email=false;
  let enable=()=>{
    let input= document.querySelectorAll(".disable")
     if(email==true)
     {
       for(let i in input){
         document.querySelectorAll(".disable")[i].removeAttribute("disabled")
         }
     }
   }
  return (
    <div className="container  p-0 resethero">
    <div className="left">
    <div className="leftUpper">
    <h3>Reset Password</h3>
      <hr />
      <div className="welcome">
        <h1 className='text-capitalize'>Welcome to Wheels for money</h1>
        <p>
         If you have forgot your password dont worry you can reset it here.
        </p>
      </div>
      <div className="form">
        <form action="#">
        <div className="emailVerify">
          <input type="email" placeholder="Enter Email and verify" />
          <button className='bg-success'>Send OTP</button>
          </div>

          <div className="emailVerify">
          <input type="email" placeholder="Enter your OTP" />
          <button className='bg-success' onClick={enable}>Verify OTP</button>
          </div>

          <input type="password" className='disable' disabled placeholder="Enter Password" />
          {/* <input type="email" placeholder="Enter Email" /> */}
          <div className="checkbox">
          <input type="checkbox" name="" id="" className='disable' disabled /><label htmlFor="">Remember Me</label>
          </div>
          <input type="submit" className='disable' disabled />
        </form>
      </div>
    </div>
      <div className="register">
        <p>
          Do you have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
    <div className="right">
      <div className="rightUpper">
          <img src={resetpwd} alt="" />
      </div>
      <div className="rightLower">
          <h2>Rent Your Dream Car on Reasonable Prices</h2>
          <p>You can rent or sell your cars with this platform.</p>
      </div>
    </div>
  </div>
  )
}
