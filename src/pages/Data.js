import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { CSVLink} from 'react-csv';
import JsPDF from 'jspdf';
import { Link, useNavigate } from "react-router-dom";



function Exportexcel() {
 const [userdata, setUserdata]= useState([]); 
 const [error, setError] = useState("");
 useEffect( ()=>{
    const getuserdata= async ()=>{
      const userreq= await fetch("http://localhost:9001/api/v1/dms");
      const userres= await userreq.json();
      console.log(userres);
      setUserdata(userres);
    }
getuserdata();
 },[]);

 const navigator= useNavigate();

 const handleDelete=async (id) =>
    {
        const response =await fetch('http://localhost:9001/api/v1/dms/$(id)',{ method: 'DELETE',
                    });
                    const result = await response.json();
                    if (!response.ok) {
                        console.log(result.error);
                        setError(result.error);
                    }
                    if (response.ok)
                    {
                        setError("Data Deleted");
                        setTimeout( () => {
                            setError("");
                            setUserdata();
                        },1000);
                    }
    };



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
                  <th scope="col">Approval</th>
                  <th scope="col">Rejection</th>
                  <th scope="col">Current Status</th>

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
                  <td>          
                      < Link type="button" class="btn btn-success" style={{marginRight: "5px"}}
                        to={'/${userdata._id}'} >Approval</Link>
                  </td>
                  <td>
                      <button type="button" class="btn btn-danger" onClick={()=> handleDelete(userdata.id)}>Reject</button>
                  </td>
                  <td>
                      <button type="button" class="btn btn-warning">Current Status</button>
                
                  </td>      
           
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