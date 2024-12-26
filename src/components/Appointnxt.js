import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Sidebar from './Sidebar'
import studentService from '../service/student.service';

export default function Appointnxt() {

  const [studentDetails, setStudentDetails] = useState({
    appointmentId:"",
	  appType:"",
	  appDoctor:"",
	  date:"",
	  slot:"",
    username:"",
    name:"",
    branch:"",
    profileImage:"",
    role:"",
  });

  const [appointment, setAppointment] = useState({
    appointmentId:"",
	  appType:"",
	  appDoctor:"",
	  date:"",
	  slot:"",
    username:"",
  });

  const handleChange=(e)=>
  {
    const value = e.target.value;
    setAppointment({ ...appointment, [e.target.name]: value});
  };

  const {id} = useParams();

  useEffect(()=>{
    studentService.getStudentDetailsById(id).then((res)=>{
      setStudentDetails(res.data);
    }).catch((error)=>{
      console.log(error);
    });
  },[]);

  const navigate = useNavigate();

  const AppointmentUpdate=(e)=>{
    studentService.updateAppointment(appointment,studentDetails.appointmentId).then((res)=>{
      navigate('/Availability/'+res.data.appointmentId);
    });
  }

  return (
    <>
    <div>
      <Sidebar/>

    </div>
  
  <div className='details'>
    <input type='hidden' value={studentDetails.appointmentId} name='appointmentId' onChange={(e)=>handleChange(e)} hidden/>
    <Row className="g-2 m-5">
      <Col md className='me-5'>
        <h6>Roll No.</h6>
        <FloatingLabel controlId="floatingInputGrid" >
          <Form.Control  value={studentDetails.username} readOnly/>
        </FloatingLabel>
      </Col>
      <Col md>
        <h6>Name</h6>
        <FloatingLabel controlId="floatingInputGrid" >
          <Form.Control  value={studentDetails.name} readOnly/>
        </FloatingLabel>
      </Col>
    </Row>

    <Row className="g-2 ms-5 me-5">
      <Col md className='me-5'>
        <h6>Appointment Type</h6>
        <FloatingLabel controlId="floatingInputGrid" >
          <Form.Control  value={studentDetails.appType} readOnly />
        </FloatingLabel>
      </Col>
      <Col md>
        <h6>Doctor</h6>
        <FloatingLabel controlId="floatingInputGrid" >
          <Form.Control   value={studentDetails.appDoctor} readOnly/>
        </FloatingLabel>
      </Col>
    </Row>
    </div>
    <div className='details'>
    <Row className="g-2">
      <Col md>
        <div className='dte'>
        <h5>Select date here</h5>
          <input className='p-2 date' type='date' name='date' onChange={(e) => handleChange(e)}/>
          
          </div>
        
      </Col>
      <Col md className='ps-5'>
      <div className=' pt-1 pb-1 me-5 mt-2 mb-5 pe-5' align="right" >
      <Button style={{backgroundColor:"green"}} onClick={() => AppointmentUpdate()}>  
    <h6>Check <br /> Availability</h6>
    </Button></div>
      </Col>
   
   <Col>
        <div className='pt-1 pb-1 me-3 mt-2 mb-5' align="center" >
      <Button style={{backgroundColor:"tomato"}}>  
    <Link to={`/NewAppoint/${studentDetails.username}`} style={{textDecoration:"none",color:"white"}}><h6>Back to <br /> New Booking</h6></Link>
    </Button></div>
    </Col>
        </Row>
    </div>
    </>
  )
}
