import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Regform from './Regform';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Text from './Text';
import Banner from './Banner';

export default function Home() {
  return (
    <div>
    <div className="border" style={{backgroundColor:"tomato"}}>
    <div className='  mt-2 mb-2 pe-3 ' align="right" >
        
    <Link to="/Signup" style={{textDecoration:"none",color:"white"}}><Button ><h5>Sign Up</h5></Button></Link>
    </div>
      </div> 

<div className='re'>
      <div className='reg'>
<Text/>
<Regform/>


</div>
<Banner/> </div>
</div>
  )
}
