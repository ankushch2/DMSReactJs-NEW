import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import './Signin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 


const Signin=()=>{
   

    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const [passwordShown,setPasswordShown]= useState('');
    const [rememberMe,setRememberMe]= useState(false);
    


    const eye = <FontAwesomeIcon icon={faEye} />;

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    }

    const navigate = useNavigate();

    const sign=()=>{
        const userObj={};
        userObj.email= email;
        userObj.password= password;
        console.log(userObj);
        if(email==='' || password==='')
        {
            alert('Please enter the fields');
            return;
        }
        
        fetch('http://localhost:9001/api/v1/dms/auth/signin',
        { method: 'POST',  headers: {
            'Content-Type': 'application/json'
          }, body:JSON.stringify(userObj)}
        ).then((response)=>{
            response.json().then(data=>{
                    console.log(data)
                    alert('Login Successfully!')
                    localStorage.setItem('token',data.token)
                    navigate('/Dashboard')
            })
        });
       

    }
    const [phoneNumber,setPhoneNumber] = useState('');

    const getOTPforNumber=()=>{
        if(phoneNumber==='')
        {
            alert('Please enter the fields');
            return;
        }
         fetch('http://localhost:9001/api/v1/dms/auth/generateOTP/'+phoneNumber).then((response)=>{
             response.json().then(data=>console.log(data));
             navigate('/enter-otp');
         });

        
    }

    return(
    <>
    <div class="box-form">
        
            <div class="center">
                <div class="col px-md-1">
                    <h1>Login</h1>
                <div class="col px-md-2">Please fill in your credentials to login.</div>
                    <div class="input">
                        <input type="text" class="form-control" id="email" 
                        value={email} onChange={(e)=>setEmail(e.target.value)}
                        aria-describedby="emailHelp" placeholder="Enter Email" />
                    </div>
                <div class="input-group mb-3">
                    <input type={passwordShown ? "text" : "password"} class="form-control" id="Password" 
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                        value={password} onChange={(e)=>setPassword(e.target.value)}
                        aria-describedby="emailHelp" placeholder="Enter Password" />
                        <i class="input-group-text" for="inputGroupSelect02" onClick={togglePasswordVisiblity}>{eye}</i>{""}
                </div>
                    <div class="row">
                        <div class="form-group col-md">
                            <div class="input-group mb-5">
                            <input type="checkbox" id="RememberMe" checked={rememberMe} onChange={(e)=> setRememberMe(e.target.checked)} />
                            <i class="d-flex justify-content-end" className="last_text">RememberMe</i>
                            </div>
                        </div>
                        <div class="form-group col-md">
                            <button type="button" onClick={()=>sign()} class="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                    <p class="d-flex justify-content-end" className="last_text">Forget Password?<a href="./ForgetPassword" >ForgetPassword</a></p>
                    <p class="d-flex justify-content-end" className="last_text">Don't have an account?<a href="./Register">Register</a></p>
                <div class="d-flex justify-content-center">
                     <button type="button" button="disable" class="btn btn-info btn-circle btn-md">OR<i class="glyphicon glyphicon-list"></i></button>
                </div>
            <div class="form-group">
                <input type="tel" class="form-control" id="phoneNumber" 
                value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}
                aria-describedby="emailHelp" placeholder="Enter Phone Number" />
            </div>
            <button type="button" onClick={()=>getOTPforNumber()} class="btn btn-primary">Get OTP</button>
        </div>
        </div>
    
    </div>
        </>
    );

}
export default Signin;