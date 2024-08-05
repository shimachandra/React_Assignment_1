import React from 'react'
import './CustButton.css'

function CustButton({label,value}) {
       
  return (<>
    <button className='btn'>{label ?? 'Click Me'}</button>
    {value}
    </>
  )
}

export default CustButton 