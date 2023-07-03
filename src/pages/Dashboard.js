import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard =()=>{
   const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/Signin')
        }
    },[])
    return(
        <>
        <div class="right">
            <button onClick={()=>{
            localStorage.removeItem('token')
            }}
            >Logout</button>
        </div>
        <div class="d-flex justify-content-center">
            <h1>
                <i>
                Welcome to the User dashboard
                </i>
            </h1>
        </div>
       
        </>
    );
}


export default Dashboard;