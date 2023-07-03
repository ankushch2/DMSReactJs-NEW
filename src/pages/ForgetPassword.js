import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import './front.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ForgetPassword=()=>{

    const [phoneNumber,setPhoneNumber] = useState('');
    const [email,setEmail]= useState('');
    const [disable1,setDisable1]=useState('');
    const [disable2,setDisable2]=useState('');


    const navigate = useNavigate();


    const resetPassword=()=>{
        if(email==='')
        {
            alert('Please enter the fields');
            return;
        }
        else{
            alert('Reset Password Link sended to Email!')
        }
    }
    const getOTPforNumber=()=>{
        if(phoneNumber==='')
        {
            alert('Please enter the fields');
            return;
        }
        else{
            alert('OTP sended to Phone Number!')
        }
         fetch('http://localhost:9001/api/v1/dms/auth/generateOTP/'+phoneNumber).then((response)=>{
             response.json().then(data=>console.log(data));
         });

        navigate('/enter-otp');
    }

    return(
        <>
        <i>
        <div class="box-form">
            <div class="left">
                <div class="overlay">
                <h2>ForgetPassword</h2>
                <p>Please fill in your credentials to ForgetPassword.</p>
                </div>
             </div>
        <div class="center">
        <div class="col px-md-2">     
        <div className="row">
        <div class="form-group col-md">
            <p for="Choose Option"><i>Please select anyone option</i></p>
            <label for="ForgetPassword">Forget Password using Email Id</label>
                    <input type="checkbox" checked={disable1} onChange={(e)=> setDisable1(e.target.checked)} />
                    <input type="text" disabled={!disable1} class="form-control" id="EnterDetail" 
                    value={email} onChange={(e)=>setEmail(e.target.value)}
                    aria-describedby="EnterDetail" placeholder="Enter Detail" />
                    <button type="button" onClick={()=>resetPassword()} class="btn btn-primary">Reset Password</button>
       
        </div>
        <div className="row">
        <div className="form-group col-md">
            <div class="d-flex justify-content-center">
            <button type="button" button="disable" class="btn btn-info btn-circle btn-md">OR<i class="glyphicon glyphicon-list"></i></button>
            </div>
        </div>
        </div>
        <div className="row">
        <div className="form-group col-md">        
        <label for="ForgetPassword">Forget Password using Mobile Number</label>
                    <input type="checkbox" checked={disable2} onChange={(e)=> setDisable2(e.target.checked)} />
                    <input type="text" disabled={!disable2} class="form-control" id="EnterDetail" 
                    value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}
                    aria-describedby="EnterDetail" placeholder="Enter Detail" />
                    <button type="button" onClick={()=>getOTPforNumber()} class="btn btn-primary">Get OTP</button>
        </div>
        </div>
        </div>
        </div>
       </div>
       </div>
        </i>
        </>
    );
}

export default ForgetPassword;