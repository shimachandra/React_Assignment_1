import React from 'react'
import './CusInput.css'

function CusInput({name,type}) {
  return (
    <div className='tag'>
        <label htmlFor="">{name}</label>
        
        <input type={type} value=""/>
         
    </div>
  )
}

export default CusInput