import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard =()=>{
   
    const navigator= useNavigate();
    const Data=()=>{
        navigator('/AdminDashboard/Data')
    }
    return(
        <>
        
        <div class="d-flex justify-content-center">
            <h1>
                <i>
                Welcome to the AdminDashboard
                </i>
            </h1>
        </div>
        <div className="container mt-5 col-md-10">
             <p>DMS User Detail<a class="btn btn-outline-warning my-2 my-sm-0" alignItems='center' onClick={()=>Data()}>Data</a></p>
        </div>
       
        </>
    );
}


export default AdminDashboard;