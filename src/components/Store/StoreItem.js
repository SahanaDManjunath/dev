import React from 'react'
import './StoreItem.css'
import { redirect } from 'react-router-dom'
const StoreItem = ({item}) => {
  
  return (
    <div className='Container-Itemdesc'>
        <div>
        <img src={item.img} style={{width:"100%",height:"70vh",objectFit:"cover"}}/>
        </div>
       
       <div className='Content-info'>
       <h1 style={{color:"white"}}>{item.title}</h1>
       {/* <h6>{item.desc}</h6> */}
       <button style={{padding:'10px', border:'2px',fontSize:'25px',cursor:'pointer'}}>Shop Now</button>
       </div>

      

    </div>
  )
}

export default StoreItem