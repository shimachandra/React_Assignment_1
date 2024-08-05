import React from 'react'
import './Signup.css'
import CustButton from './Common/CustButton'
import CusInput from './Common/CusInput'


function Signup() {
    
  return (
    <div className='Signup'>

        <h2 className='hd'>Signup</h2>
        
        <CusInput name={"Name "} type={'text'}/>
        
        <CusInput name={"Mobile No: "} type={'number'}/>
        <CusInput name={"Email: "} type={'email'}/>
        
        <CusInput name={"Password "} type={'password'}/>
        <CusInput name={"Confirm Password "} type={'password'}/>

        <CustButton label={'Signup'}/>
    </div>
  )
}

export default Signup