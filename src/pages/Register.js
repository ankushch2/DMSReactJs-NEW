import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import validator from "validator";
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register=()=>{

    const navigator= useNavigate();


    const [phoneNumber,setPhoneNumber]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [role,setRole]=useState('');
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [type,setType]=useState('');
    const [pan,setPAN]=useState('');
    const [gst,setgst]=useState('');
    const [address,setAddress]=useState('');
    const [CouponCode,setCouponCode]=useState('');
    const [disable,setDisable]= useState(false);
    const [passwordShown,setPasswordShown]=useState('');
    const [errorMessage,setErrorMessage]=useState('');

    const eye = <FontAwesomeIcon icon={faEye} />;

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    }

    const validate = (value) => {
  
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Is Strong Password')
            
        } else {
            setErrorMessage('Is Not Strong Password')
        }
    }
    const createUser=()=>{
        console.log('create user API');
        if(phoneNumber===''|| email==='' || password==='' || firstName==='' || lastName==='' ||gst===''|| pan===''|| address===''|| role===''|| type==='')
        {
            alert('All field are required');
            return;
        }
        else
        {
            alert('Registered Successfully!')
        }
        const userObj={};
        userObj.mobile= phoneNumber;
        userObj.email= email;
        userObj.password= password;
        userObj.role= role;
        userObj.dms={};
        userObj.dms.firstName=firstName;
        userObj.dms.lastName=lastName;
        userObj.dms.type=type;
        userObj.dms.pan=pan;
        userObj.dms.gst=gst;
        userObj.dms.address=address;
        userObj.dms.CouponCode=CouponCode;
        console.log(userObj);

        fetch('http://localhost:9001/api/v1/dms/auth/register',
        { method: 'POST',  headers: {
            'Content-Type': 'application/json'
          }, body:JSON.stringify(userObj)}
        ).then((response)=>{
            response.json().then(data=>{
                    console.log(data)
                    navigator('/Dashboard')
            })
        });

    }
    const Signin=()=>{
        navigator('/Signin')
    }
    
   
    
    return(
        <>
       
        <div class="box-form">

            <div class="col px-md-1">
            <div className="container mt-5 col-md-10">
            <h2>Register</h2>
            <p>Please fill this form to create an account.</p>
            <div class="form-group required">
                <div className="row">
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" id="firstName" 
                    value={firstName} onChange={(e)=>setFirstName(e.target.value)}
                    aria-describedby="firstName" placeholder="Enter First Name" />
                </div>
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" id="lastName" 
                    value={lastName} onChange={(e)=>setLastName(e.target.value)}
                    aria-describedby="lastName" placeholder="Enter Last Name" />
                </div>
            </div>
            <div className="row">
                <div class="form-group col-md-6">
                    <input type="tel" class="form-control" id="phoneNumber" MaxLength="10"
                    value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}
                    aria-describedby="emailHelp" placeholder="Enter Phone" />
                </div>
                <div class="form-group col-md-6">
                    <input type="email" class="form-control" id="email" 
                    value={email} onChange={(e)=>setEmail(e.target.value)}
                    aria-describedby="emailHelp" placeholder="Enter Email" />
                </div>
                <div class="form-group col-md-6 pass-wrapper">
                    <div class="input-group mb-3">
                    <input type={passwordShown ? "text" : "password"} class="form-control" id="Password" 
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                    value={password} onChange={(e)=>setPassword(validate(e.target.value))}
                    aria-describedby="emailHelp" placeholder="Enter Password" />
                    
                    <i class="input-group-text" for="inputGroupSelect02" onClick={togglePasswordVisiblity}>{eye} </i>{""}
                    <small id="passwordHelpBlock" class="form-text text-muted">
                    {errorMessage === '' ? null :
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{errorMessage}</span>}
					    Your password must be 8-20 characters long,  must contain 
                        special characters "!@#$%&*_?", numbers, lower and upper letters only.
                    </small>                
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <select class="form-select" aria-label="Default select example">
                    <option selected>Select Role</option>
                    <option value="Manager" >Manager</option>
                    <option value="Wholeseller">Wholeseller</option>
                    <input type="role" class="form-control" id="role" 
                    value={role} onChange={(e)=>setRole(e.target.value)}
                    aria-describedby="emailHelp" placeholder="Enter Role" />
                    </select>

                   
                </div>
            </div>
            
            <div className="row">
                <div class="form-group col-md-6">
                    <input type="text" class="form-control" id="designation" 
                    value={type} onChange={(e)=>setType(e.target.value)}
                    aria-describedby="type" placeholder="Enter Shop Type" />
                </div>
                <div class="form-group col-md-6">
                    <input type="address" class="form-control" id="address" 
                    value={address} onChange={(e)=>setAddress(e.target.value)}
                    aria-describedby="address" placeholder="Enter address" />
                </div>
                
            </div>
            <div className="row">
                <div class="form-group col-md-6">
                     <input type="pan" class="form-control" id="pan" MaxLength="10" 
                    value={pan} onChange={(e)=>setPAN(e.target.value)}
                    aria-describedby="pan" placeholder="Enter Pan Card Detail" />
                    <div class="mb-3">
                        <label for="formFileSm" class="form-label">Attach suppoting Document Pan Card (in .pdf,.jpeg,jpg)</label>
                        <input class="form-control form-control-sm" id="formFileSm" type="file"/>
                    </div>
                </div>
                <div class="form-group col-md-6">
                    <input type="gst" class="form-control" id="gst" MaxLength="15"
                    value={gst} onChange={(e)=>setgst(e.target.value)}
                    aria-describedby="gst" placeholder="Enter GST Detail" />
                    <div class="mb-3">
                        <label for="formFileSm" class="form-label">Attach suppoting Document GST Document (in .pdf,.jpeg,jpg)</label>
                        <input class="form-control form-control-sm" id="formFileSm" type="file"/>
                    </div>
                </div>   
            </div>
            <div className="row">
                <div class="form-group col-md-6">
                    <label for="CouponCode">Do You have Dealer Coupon Code? </label>
                    <input type="checkbox" checked={disable} onChange={(e)=> setDisable(e.target.checked)} />
                    <input type="text" disabled={!disable} class="form-control" id="CouponCode" 
                    value={CouponCode} onChange={(e)=>setCouponCode(e.target.value)}
                    aria-describedby="CouponCode" placeholder="Enter CouponCode" />
                </div>
            </div>

            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>    
            <div className="row">
            <div class="form-group col-md-6">
            <button type="button" onClick={()=>createUser()}  class="btn btn-success">Create</button>
            <button type="button"  onClick={()=>navigator('/Welcome')} class="btn btn-danger ml-5">Cancel</button>
            </div>
            </div>
        
        <div class="container signin">
             <p>Already have an account? <a class="btn btn-outline-warning my-2 my-sm-0" alignItems='center' onClick={()=>Signin()}>Sign in</a></p>
        </div>
        </div>
        </div>
        </div>
        </div>
        

        </>
    );
}
export default Register;