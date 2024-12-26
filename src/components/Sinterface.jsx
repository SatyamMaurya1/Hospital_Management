import React,{useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom'
import {Row, Col, Container, Image} from 'react-bootstrap'
import studentService from '../service/student.service'
import { Link } from 'react-router-dom'


export default function Sinterface() {

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


  return (
    <>
    <div>
    <div className='sbar' >
      <Sidebar/>
      </div>
     
      

    </div>
    <div>
    <div className='vh-30 sinfo' align="center" >
    <Container  style={{ height: '200px' }} >
       <Row className='ps-3' style={{align:"left", height: '100px' }}>
       <Col>
         <Image src="/image1/iitlogo.png" />
       </Col>
       </Row>
     </Container>
     <div className='info ps-5'>
      <h5>Name: {student.name}</h5>
  <h5>Roll No. {student.username}</h5>
  <h5>Branch : {student.branch}</h5>
     </div>
    </div>

    

    <div>
    <div id="sm">
    <div className="appoint" align="center">
    
    <div className='pt-5'>
    <h3>Book New 
      </h3><h3>Appointment</h3>
      <Link to={`/NewAppoint/${student.username}`} style={{textDecoration:"none"}}>
     <button className="white" style={{backgroundColor:"green",color:"white"}}>Book</button>
     </Link>
    </div>
</div>


<div className="vappoint" align="center">
<div className='pt-5'>  
    <h3>View Appointment
      </h3>  <h3> History</h3>
      <Link to="/VAppoint" style={{textDecoration:"none"}}>  
    <button className="white" style={{backgroundColor:"green",color:"white"}}>View</button>
    </Link>
    </div>
  
</div>
    </div>
    </div>
    
    </div>
    </>
  )
}