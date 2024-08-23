import { ArrowLeftOutlined, ArrowRight, ArrowRightOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dataitems } from '../../data';


const Container= styled.div`
  height:100%;
  width:100%;
  display:flex;
position: relative;
overflow:hidden;


`
const Arrow=styled.div`
width:50px;
height:50px;
border-radius:50%;
background-color:pink;
display:flex;
 justify-content:center;
 align-items:center;
 position: absolute;
 top:0;
 bottom:0;
 left:${props=>props.direction==="left"&&"10px"};
right:${props=>props.direction==="right"&&"10px"};
 right:10px;
 cursor:pointer;
 opacity:0.5;
 z-index:1;

`
const Wrapper=styled.div`
width:100%;
display:flex;
transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);



`
const Slide=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:#${props=>props.bg};


`
const ImageContent=styled.div`
height:100%;
flex:1;

`
const InfoContent=styled.div`
flex:1;
padding:50px;
`

const Slider = () => {
    const[slideData,setSlideData]=useState(0);
    const handClick=(direction)=>{

    }
    useEffect((item)=>{
       setSlideData(item);  
    },[])
  return (
    <Container>

        <Arrow direction="left" onClick={()=>handClick("left")}>

            <ArrowLeftOutlined style={{margin:"10px"}}></ArrowLeftOutlined>
        </Arrow>
        <Wrapper>
     {dataitems.map((item)=>(
      <Slide bg={item.bg}>
      <ImageContent>
       <img src={item.img} style={{height:"80%",marginLeft:'200px'}}></img>
      </ImageContent>
      <InfoContent>
          <h1 style={{fontSize:"80px" ,}}>{item.title}</h1>
       <p style={{fontWeight:"600", letterSpacing:"3px", margin:"50px 0", fontSize:"20px"}}>{item.desc}</p>
       <button style={{fontSize:"20px" , padding:"10px",backgroundColor:"transparent",cursor:"pointer"}}>Shop Now</button>
      </InfoContent>
  </Slide>

  
     ))}

     
            {/*  */}
          
            {/*  */}
            {/* <Slide bg="fbf0f4">
                <ImageContent>
                 <img src='https://m.media-amazon.com/images/I/61z7MutRUvL._AC_UL480_FMwebp_QL65_.jpg' style={{height:"80%",marginLeft:'200px'}}></img>
                </ImageContent>
                <InfoContent>
                    <h1 style={{fontSize:"80px" ,}}>Summer sale!</h1>
                 <p style={{fontWeight:"600", letterSpacing:"3px", margin:"50px 0", fontSize:"20px"}}>Don't Compromise on style! Get 30% off  for new arrivals</p>
                 <button style={{fontSize:"20px" , padding:"10px",backgroundColor:"transparent",cursor:"pointer"}}>Shop Now</button>
                </InfoContent>
            </Slide> */}
      
        </Wrapper>
        <Arrow direction="right" onClick={()=>handClick("right")}>
        <ArrowRightOutlined style={{margin:"10px"}}></ArrowRightOutlined>
        </Arrow>
    </Container>
 
  )
}

export default Slider