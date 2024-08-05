import React from 'react'
import './Login.css'
import CustButton from './Common/CustButton'
import CusInput from './Common/CusInput'

function Login() {
    
  return (
    <div className='Login'>

        <h2 className='head2'>Login</h2>
        

        <CusInput name={"User name "} type={'text'}/>

        <CusInput name={"Password "} type={'password'}/>
        
        
        <CustButton label={'Login'}/>

    </div>
  )
}

export default Login