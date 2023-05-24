import React from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import register from '../img/register.png'

export default function Register() {
  let email=true;
 
  let enable=()=>{
   let input= document.querySelectorAll(".disable")
    if(email===true)
    {
      for(let i in input){
        document.querySelectorAll(".disable")[i].removeAttribute("disabled")
        }
    }
    if(email===true)
    {
      document.querySelectorAll(".otpbtn")[0].setAttribute("disabled")
      document.querySelectorAll(".otpbtn")[1].setAttribute("disabled")
    }
    else{
      document.querySelectorAll(".otpbtn")[0].removeAttribute("disabled")
      document.querySelectorAll(".otpbtn")[1].removeAttribute("disabled")
    }
  }

  return (
    
    <div className="container  p-0 hero">
      
    <div className="left">
    <div className="leftUpper">
    <h3>Sign Up As A Merchent</h3>
      
      <div className="form">
        <form action="#">
          <div className="emailVerify">
          <input type="email" placeholder="Enter Email and verify" />
          <button className='bg-success otpbtn'>Send OTP</button>
          </div>

          <div className="emailVerify">
          <input type="email" placeholder="Enter your OTP" />
          <button className='bg-success otpbtn' onClick={enable}>Verify OTP</button>
          </div>

          <input className='disable' type="text" placeholder="Enter Username" disabled/>
          <div className="pwd"><input className='disable' type="password" placeholder="Enter Password" disabled />
          <input className='disable' type="password" placeholder="Confirm Password" disabled /></div>
          <input className='disable' type="text" placeholder="Enter your GST NUMBER" disabled />
          <input className='disable' type="text" placeholder="Enter your PAN NUMBER" disabled />
          <label>Address:</label>
          <div className="address">
          <input className='disable' type="text" placeholder="Mobile Number" disabled />
          <input className='disable' type="text" placeholder="Shop name" disabled />
          <input className='disable' type="text" placeholder="Street" disabled />
          <input className='disable' type="text" placeholder="Landmark" disabled />
          <input className='disable' type="text" placeholder="City" disabled />
          <input className='disable' type="text" placeholder="State" disabled />
          <input className='disable' type="text" placeholder="PinCode" disabled />
          </div>
          
          {/* <div className="checkbox">
          <input disabled className='disable' type="checkbox" name="" id="" /><label htmlFor="">I agree with the <a>Terms & Conditions</a> </label>
          </div> */}
          <input type="submit" className='disable ' disabled/>
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
          <img src={register} alt="" />
      </div>
      <div className="rightLower">
          <h2>Welcome To Wheels For Money</h2>
          <p>You can easly sell or rent your cars, we are providing this facility all over india </p>
      </div>
    </div>
  </div>
  )
}
