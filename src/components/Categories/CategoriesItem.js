import React from 'react'
import './CategoriesItem.css'
import { Height } from '@mui/icons-material'

const CategoriesItem = ({item}) => {
  return (
    <div className='Container'>
        <img src={item.img}  style={{height:'50vh'}}/>
    </div>
  )
}

export default CategoriesItem