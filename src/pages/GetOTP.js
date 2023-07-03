import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const GetOTP=()=>{

    const [phoneNumber,setPhoneNumber] = useState('');


    const navigate = useNavigate();


    const getOTPforNumber=()=>{
         fetch('http://localhost:9001/api/v1/dms/auth/generateOTP/'+phoneNumber).then((response)=>{
             response.json().then(data=>console.log(data));
         });

        navigate('/enter-otp');
    }

    return(
        <div className="container mt-5 col-md-4">
            <div class="form-group">
                <label for="phoneNumber">Enter Phone</label>
                <input type="tel" class="form-control" id="phoneNumber" 
                value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}
                aria-describedby="emailHelp" placeholder="Enter Phone" />
            </div>
            <button type="button" onClick={()=>getOTPforNumber()} class="btn btn-primary">Get OTP</button>
        </div>
    );
}

export default GetOTP;