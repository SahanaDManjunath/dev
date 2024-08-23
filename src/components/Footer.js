import React from 'react'
import './Footer.css';
import { Call, ContactEmergencyOutlined, ContactMail, Email, Facebook, Instagram, ReportGmailerrorredOutlined, Room, Twitter } from '@mui/icons-material';


const Footer = () => {
  return (
    <div className='Container-footer'>
    <div  className='footer-one'>
    <h1 style={{fontFamily:'fantasy'}}>SHOP</h1>
     <p style={{margin:"20px 0px"}}>DON'T COMPROMISE ON STYLE!
        <br></br> 
        GET FLAT 30% OFF FOR NEW ARRIVALS.</p>

      <div className='icons-container'>
      <div className='icons'>
        <Facebook/>
      </div>
      <div className='icons'>
        <Instagram/>
      </div>
      <div className='icons'>
        <Twitter/>
      </div>
      </div>
  
    </div>

    <div  className='footer-two'>
    <div className='ListItem-Container'>
       <h1>Useful Links</h1> 
      <div className='list-items'>
         Home
      </div>
      <div className='list-items'>
          Cart
        </div>
        <div className='list-items'>
          Fashion
        </div>
        <div className='list-items'>
         Accessorsies
      </div>
      <div className='list-items'>
          Men's Fashion
        </div>
        <div className='list-items'>
          Women's Fashion
        </div>
    </div>
  </div>
  <div  className='footer-three'>
  <h1>Contact us</h1>
   <div className='footer-contact'>
    <div className='contact-info'>
    <Room/>633 path,bengaluru 
    </div>
    <div className='contact-info'>
    <Call/>+133,324434
    </div>
    <div className='contact-info'>
     <Email></Email>Shop@gmail.com
    </div>
   </div>
  </div>


    </div>
  )
}

export default Footer