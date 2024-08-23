import React from 'react'
import'./Nav.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';
import { Search, ShoppingBagOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
const Language= styled.div`
font-size:15px;
cursor:pointer;

`
const SearchContainer=styled.div`
border:1px solid lightgrey;
padding:10px;
margin-left:10px;

`

const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left:10px;


`


const Nav = () => {
  return (
    <div className='container'>
        <div className='nav-item'>
            <div className='itemOne'>
                <Language>
                En</Language>
                <SearchContainer>
            
                <input style={{border:'none'}}></input>
                <Search style={{fontSize:'16px',color:'grey'}}></Search>
                </SearchContainer>
      
            
            </div>
            <div className='itemTwo'>
              <h1 style={{fontFamily:'fantasy'}}>SHOP</h1>
              </div>
            <div className='itemThree'>
              <MenuItem>
               Register
              </MenuItem>
              <MenuItem>
              Login
              </MenuItem>
              <MenuItem>
              <Badge badgeContent={4} color="primary">
       
             <ShoppingCartOutlined></ShoppingCartOutlined>
              </Badge>
              </MenuItem>
            </div>
        
         
        
        </div>
       
      
    </div>
  )
}

export default Nav