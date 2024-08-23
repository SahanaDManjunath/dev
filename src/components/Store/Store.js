import React from 'react'
import { StoreItemsData } from '../../data'
import StoreItem from './StoreItem'
import './Store.css';

const Store = () => {
  return (
    <div className='Container-Store'>
        {StoreItemsData.map((item)=>(
            <StoreItem item={item}/>
        ))}

    </div>
  )
}

export default Store