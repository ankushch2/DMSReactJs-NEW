import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard =()=>{
    const navigator=useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigator('/Signin')
        }
    },[])
    return(
        <>
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