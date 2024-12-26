import React,{useState, useEffect} from 'react'
//import { useState } from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useParams } from 'react-router-dom'
import studentService from '../service/student.service'

export default function Sidebar() {



  const [student, setStudent] = useState({
    username:"",
    name:"",
    password:"",
    branch:"",
    profileImage:"",
    role:"",
  })
 
  const {id} = useParams();

  useEffect(()=>{
    studentService.getStudentById(id).then((res)=>{
      setStudent(res.data);
    }).catch((error)=>{
      console.log(error);
    });
  });



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <div className='mb-3 pt-2'>   <div style={{backgroundColor:"tomato"}}>  <i className="fa-solid fa-bars fa-2xl p-2 m-3"  onClick={handleShow}></i></div>
      
 

      <Offcanvas className="side" style={{width: "300px",color:"brown", backgroundColor:"black"}} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className='sibar'>
          <li>
          <i class="fa-solid fa-house-chimney-user"></i>
          <Link to="/Sinterface" style={{textDecoration:"none"}}>Home</Link> 
          </li>
          <li>
          <i class="fa-solid fa-id-card"></i>
          <Link to={`/NewAppoint/${student.username}`} style={{textDecoration:"none"}}>New Appointment</Link> 
          </li>
          <li>
          <i class="fa-solid fa-id-card"></i>
          <Link to="/Vappoint" style={{textDecoration:"none"}}>View Appointment</Link> 
          </li>
          <li>
          <i class="fa-regular fa-file-pdf"></i>
          <Link to="/Sinterface" style={{textDecoration:"none"}}>Medical Records</Link> 
          </li>
          <li>
          <i class="fa-regular fa-file-pdf"></i>
          <Link to="/Sinterface" style={{textDecoration:"none"}}>Lab Reports</Link> 
          </li>
          <li>
          <i class="fa-solid fa-file-signature"></i>
          <Link to="/Sinterface" style={{textDecoration:"none"}}>Prescription</Link> 
          </li>
          <li>
          <i class="fa-solid fa-key"></i>
          <Link to="/Sinterface" style={{textDecoration:"none"}}>Change Password</Link> 
          </li>

        </ul>
        </Offcanvas.Body>
      </Offcanvas>
      </div>
    </>
  )
}
