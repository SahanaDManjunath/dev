import React from 'react'
import { Categoriesitems } from '../../data'
import CategoriesItem from './CategoriesItem'
import { useState } from 'react';
import './Categories.css';
import { ArrowLeftOutlined, ArrowRight, ArrowRightOutlined } from '@mui/icons-material';
import styled from 'styled-components';
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color:pink;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
   bottom:190px;
  cursor: pointer;
  opacity: 1;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
 
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Categories = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick=(direction)=>{

        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
          } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
          }
    }
  return (
    <div className='Container'>
           <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
      {Categoriesitems.map((item)=>(
        <CategoriesItem item={item} key={item.id}/>
        ))}
      </Wrapper>
       
 <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>

    </div>
  )
}

export default Categories