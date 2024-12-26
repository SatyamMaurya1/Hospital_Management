import React,{useState} from 'react'
import { Button,Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import studentService from '../service/student.service';



const Regform=()=> {

  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    username:"",
    password:"",
    role:"",
  });

  const [msg, setMsg] = useState("");

  const handleChange=(e)=>
  {
    const value = e.target.value;
    setLoginDetails({ ...loginDetails, [e.target.name]: value});
  };

  const StudentLogin=(e)=>{
    e.preventDefault();

    studentService.login(loginDetails).then((res)=>{
      console.log("Login Successfully");
      if (res.data.message === "Username not exits") 
             {
               setMsg("Username not exits");
             } 
             else if(res.data.message === "Login Success")
             { 
                
                navigate('/Sinterface/'+loginDetails.username);
             } 
              else 
             { 
                setMsg("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  })
  };

  return (
    <>
   <div className='container c1' align="right">
      <div className='card   border-3 border-secondary pt-4 ps-3 card1' >
        <div className='card-header  fs-5  bg-secondary text-white text-center w-50 pt-1 '>SIGN IN</div>
        {
          msg && <p className='fs-4 text-center text-success'>{msg}</p>
        }
        <div className='card-body p-3'  align="left">
    <Form onSubmit={(e)=>StudentLogin(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter roll no." name='username' onChange={(e) => handleChange(e)} value={loginDetails.username} />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={(e) => handleChange(e)} value={loginDetails.password}/>
      </Form.Group>

      <Form.Group className='mb-4'>

        <div id='select'>
        <Form.Check className='m-2 ' type="radio" id="2" name="role" label="Doctor "  onChange={(e) => handleChange(e)} value="doctor"/>
        <Form.Check className='m-2' type="radio" id="1" name="role" label="Student"  onChange={(e) => handleChange(e)} value="student"/></div>
      </Form.Group>
      <div className='text-center'><Button variant="secondary" type="submit" size="lg">
        Submit
      </Button></div>
    
    </Form>

    </div>
    </div>
    </div>
    </>
  )
}

export default Regform
