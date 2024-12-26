import React from 'react'
import { Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
export default function Banner() {
  return (
    <>
    <div id="sm-banner">
    <div className="banner-box">
    <Col xs={5} md={3}>
          <Image className='ih'  src="image1/faq.png" height= "170px" width="150px" rounded />
        </Col>
    <div>
    <h2>FAQ</h2>
    
    <p>
    Have questions about using MyHealth? <br /> Find information about things like: </p>
    <ul>
<li>Help with various MyHealth features</li>
<li>Sharing access with caregivers & family</li>
<li>eCheck-in & arriving to your visits
</li>
</ul>
   
    
    <button className="white">Click here</button>
    </div>
</div>
<div className="banner-box">
<Col xs={5} md={3}>
          <Image className='ih'  src="image1/support.png" height= "170px" width="160px" rounded />
        </Col>




<div>  
    <h2>Support</h2>
    <p>
    Having issues with MyHealth? <br />We can help you with: </p>
    <ul>
<li>Technical Support</li>
<li>Billing Support</li>
<li>Clinic/Hospital Support</li>
</ul>
   
    <button className="white">Click here</button>
    </div>
  
</div>
    </div>
    </>
  )
}
