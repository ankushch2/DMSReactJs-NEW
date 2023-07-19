import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const EnterOTP=()=>{

    const navigate= useNavigate();

    const [OTP,setOTP] = useState('');
    const [mobile,setmobile] = useState('');
    

    

    const enterOTPLogin=()=>{
        
        const userObj={};
        userObj.mobile=mobile ;
        userObj.OTP= OTP;
        console.log(userObj);
        if(mobile==='' || OTP==='')
        {
            alert('Please enter the fields');
            return;
        }
        
        fetch('http://localhost:9001/api/v1/dms/auth/login',
        { method: 'POST',  headers: {
            'Content-Type': 'application/json'
          }, body:JSON.stringify(userObj)}
        ).then((response)=>{
            response.json().then(data=>{
                    console.log(data)
                    alert('Login Successfully!')
                    localStorage.setItem('token',data.token)
                    localStorage.setItem('mobile',data.mobile)
                    localStorage.setItem('role',data.role)
                    localStorage.setItem("date", new Date().toString()); 
                    navigate('/Dashboard')
            })
        });
    } 

    return(
        <i>
        <div class="box-form">
        <div class="left">
                <div class="overlay">
                <h2>Login with OTP</h2>
                <p>Welcome to Dealer Management System</p>
                </div>
        </div>    
        <div className="container mt-5 col-md-5">
        <div class="center">    
             <div class="form-group">
                <input type="tel" class="form-control" id="phoneNumber" 
                value={mobile} onChange={(e)=>setmobile(e.target.value)}
                aria-describedby="emailHelp" placeholder="Enter Phone Number" />
            </div>
            <div class="form-group">
                <input type="string" class="form-control" id="enterOTP" 
                value={OTP} onChange={(e)=>setOTP(e.target.value)}
                aria-describedby="emailHelp" placeholder="Enter OTP" />
            </div>
            <button type="button" onClick={()=>enterOTPLogin()} class="btn btn-primary">Login</button>
        </div>
        </div>
        </div>
       
        </i>
    );
}

export default EnterOTP;