import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardHeader, Container, Row, Col } from 'react-bootstrap'
import { Checkmark } from 'react-checkmark'
import { useParams } from 'react-router-dom';
import studentService from '../service/student.service';

const Final = () => {

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

  const {id} = useParams();

  useEffect(()=>{
    studentService.getStudentDetailsById(id).then((res)=>{
      setStudentDetails(res.data);
    }).catch((error)=>{
      console.log(error);
    });
  },[]);

  return (
    <Container className='text-center'>
      <Row>
        <Col>
        <Card>
          <CardHeader >
            <Checkmark size="xxLarge" color="green"/>
            <p className='fs-5'>Appointment Booked Successfully</p>
          </CardHeader>
          <CardBody>
            <p><strong>Roll No :</strong>{studentDetails.username}</p>
            <p><strong>Name :</strong>{studentDetails.name}</p>
            <p><strong>Department: </strong>{studentDetails.branch}</p>
            <p><strong>Token No.</strong>{studentDetails.slot}</p>
            <p><strong>Appointment Date: </strong>{studentDetails.date}</p>
            <p><strong>Appointment Type: </strong>{studentDetails.appType}</p>
            <p><strong>Appointment Doctor: </strong>{studentDetails.appDoctor}</p>
          </CardBody>
        </Card>
        </Col>
      </Row>
      </Container>
  )
}

export default Final;