import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar=()=>{

    const navigator=useNavigate();


   
    const Register=()=>{
        navigator('/Register');
    }
    const Signin=()=>{
        navigator('/Signin')
    }

    return(
        <>
         <i> 
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand px-md-2" href="./">DMS-One Solution</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">User Dashboard <span class="sr-only">()</span></a>
                </li> 
                <li class="nav-item active">
                    <a class="nav-link" href="#">Order Management<span class="sr-only">()</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Achievememt Tracking <span class="sr-only">()</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Target Management<span class="sr-only">()</span></a>
                </li>
                </ul>
                <button style={{float : 'left', paddingRight : '5px'}} class="btn btn-outline-warning my-2 my-sm-0" alignItems='center' onClick={()=>Signin()} type="button">Login</button>
                <button type="button" onClick={()=>Register()}  class="btn btn-success px-md-2">Register</button>
            </div>
            
        </nav>
        </i>
        </>
    );
}


export default NavBar;