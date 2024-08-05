import React from 'react'
import './Navbar.css'



function Navbar() {
  return (
    
    <div className='Navbar'>
    
      <img className='image' src='https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=256' width={50}></img>
        <h1 className='head1'>REACT Js</h1>

        <div>


        <input type='text'/>
        <button>Search</button>
        
        </div> 
        
    </div>
  )
}

export default Navbar
