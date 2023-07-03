import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { CSVLink} from 'react-csv';
import JsPDF from 'jspdf';



function Exportexcel() {
 const [userdata, setUserdata]= useState([]); 
 useEffect( ()=>{
    const getuserdata= async ()=>{
      const userreq= await fetch("http://localhost:9001/api/v1/dms");
      const userres= await userreq.json();
      console.log(userres);
      setUserdata(userres);
    }
getuserdata();
 },[]);



  return (
    <React.Fragment>
      <Container>
        <div className="row">
          <div className="col-sm-8">
            <h4 className="mt-3 mb-3">Export Data in Excel using React Js </h4>

          <CSVLink  data={ userdata} filename="RegisterUserData"  className="btn btn-success mb-3">Export User Data</CSVLink>
          
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Pan Card</th>
                  <th scope="col">GST</th>
                  <th scope="col">Address</th>

                </tr>
              </thead>
              <tbody>
            
               {
                 userdata.map( (getdms, index)=>(
                <tr key={index}>
                  <td > {index+1} </td>
                  <td >{getdms.firstName} </td>
                  <td >{getdms.lastName} </td>
                  <td >{getdms.pan} </td>
                  <td >{getdms.gst} </td>    
                  <td >{getdms.address} </td>         
           
                </tr>
                  ) )
                }
                    
          
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Exportexcel;