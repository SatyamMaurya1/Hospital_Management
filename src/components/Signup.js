import React, { useState } from 'react'
import { Button,Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import studentService from '../service/student.service';
import { Checkmark } from 'react-checkmark'

export default function Signup() {

  const [studentDetails, setStudentDetails] = useState({
    username:"",
    name:"",
    password:"",
    branch:"",
    profileImage:"",
    role:"",
    mobile:"", 
  });

  const [msg, setMsg] = useState("");

  const handleChange=(e)=>
  {
    const value = e.target.value;
    setStudentDetails({ ...studentDetails, [e.target.name]: value});
  };

  const StudentRegister=(e)=>{
     e.preventDefault();

    studentService.saveStudent(studentDetails).then((res)=>{
      console.log("Login Successfully");
      setMsg(res.data);
          }, fail => {
           console.error(fail); // Error!
  })
  };
  return (
    <>



    <div className="border" style={{backgroundColor:"tomato"}}>
    <div className='  mt-2 mb-2 pe-3 ' align="right" >
        
    <Link to="/Home" style={{textDecoration:"none",color:"white"}}><Button ><h5>Login</h5></Button></Link>
    </div>
      </div> 

<div className='re'>
    
    <div className='su'>
      <div className='container' align="right">
      <div className='card   border-3 border-secondary pt-4 ps-3 ' >
        <div className='card-header  fs-5  bg-secondary text-white text-center w-50 '>SIGN Up</div>
        <div className='card-body p-3'  align="left">

    <Form onSubmit={(e)=>StudentRegister(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" name="username" placeholder="Enter Roll No."   onChange={(e) => handleChange(e)} value={studentDetails.username} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name" onChange={(e) => handleChange(e)} value={studentDetails.name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Branch</Form.Label>
        <Form.Control type="text" name="branch" placeholder="Enter Branch" onChange={(e) => handleChange(e)} value={studentDetails.branch} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="text" name="mobile" placeholder="Enter your contact number" onChange={(e) => handleChange(e)} value= {studentDetails.mobile} />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => handleChange(e)} value={studentDetails.password} />
      </Form.Group>

      <Form.Group className='mb-4'>
        <div id='select'>
        <Form.Check className='m-2 ' type="radio" id="2" name="role" value="doctor" label="Doctor" onChange={(e) => handleChange(e)} />
        <Form.Check className='m-2' type="radio" id="1" name="role" value="student" label="Student" onChange={(e) => handleChange(e)} /></div>
      </Form.Group>
      <div className='text-center'><Button variant="secondary" type="submit" size="lg">
        Submit
      </Button></div>
    
    </Form>

    {
          msg &&  <p className='fs-4 text-center text-success pt-3'> <Checkmark size="medium" color="green"/>{msg}</p>
        }

    </div>
    </div>
    </div>
    </div></div>
    </>
  )
}
